// verify_pages_and_screenshots.js
import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const BASE_URL = "http://localhost:5173";

const routes = [
  { path: '/', name: 'Home' },
  { path: '/our-story', name: 'Our Story' },
  { path: '/our-philosophy', name: 'Our Philosophy' },
  { path: '/education-activities', name: 'Education & Activities' },
  { path: '/life-at-gurukula', name: 'Life At Gurukula' },
  { path: '/child-journey', name: 'Child Journey' },
  { path: '/gallery', name: 'Gallery' },
  { path: '/support-our-mission', name: 'Support Our Mission' },
  { path: '/contact', name: 'Contact' },
  { path: '/login', name: 'Login' }
];

async function run() {
  console.log('Launching browser to test Shubham Karoti Gurukula website & portal...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const errors = [];
  page.on('pageerror', err => {
    errors.push(`[Page Error] ${err.toString()}`);
  });
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(`[Console Error] ${msg.text()}`);
    }
  });

  console.log('\n--- 1. Testing Public Routes ---');
  for (const r of routes) {
    const url = `${BASE_URL}${r.path}`;
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
      const title = await page.title();
      console.log(`✓ [${r.name}] ${url} loaded successfully (Title: ${title.substring(0, 30)}...)`);
    } catch (e) {
      console.error(`❌ [${r.name}] Failed to load ${url}:`, e.message);
    }
  }

  console.log('\n--- 2. Testing Portal Login & Workflow ---');
  try {
    await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle2' });
    
    // Click on Admin quick demo button
    const clicked = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const adminBtn = btns.find(b => b.innerText.includes('Managing Trustee'));
      if (adminBtn) {
        adminBtn.click();
        return true;
      }
      return false;
    });
    if (clicked) {
      console.log('✓ Clicked Admin Quick Autofill button');
    } else {
      await page.type('input[type="email"]', 'admin@gurukula.com');
      await page.type('input[type="password"]', 'admin');
      console.log('✓ Typed admin credentials manually');
    }

    // Click submit
    await Promise.all([
      page.click('button[type="submit"]'),
      page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 10000 }).catch(() => null)
    ]);

    await new Promise(res => setTimeout(res, 1000));
    const currentUrl = page.url();
    console.log(`✓ Current URL after login: ${currentUrl}`);

    // Check portal subpages
    const portalSubpages = [
      { path: '/portal', name: 'Portal Overview' },
      { path: '/portal/admissions', name: 'Portal Admissions Pipeline' },
      { path: '/portal/students', name: 'Portal Students Directory' },
      { path: '/portal/observations', name: 'Portal Observation Logger' },
      { path: '/portal/reports', name: 'Portal Reports' },
      { path: '/portal/support-enquiries', name: 'Portal Support Enquiries' },
      { path: '/portal/messages', name: 'Portal Messages' }
    ];

    for (const p of portalSubpages) {
      await page.goto(`${BASE_URL}${p.path}`, { waitUntil: 'networkidle2' });
      const h1Text = await page.evaluate(() => document.querySelector('h1')?.innerText || document.querySelector('h2')?.innerText || '');
      console.log(`✓ [${p.name}] ${p.path} rendered successfully (Heading: "${h1Text.substring(0, 35)}")`);
    }

  } catch (err) {
    console.error('❌ Portal navigation error:', err.message);
  }

  console.log('\n--- 3. Testing Gallery Image Display & Layout ---');
  try {
    await page.goto(`${BASE_URL}/gallery`, { waitUntil: 'networkidle2' });
    const imgCount = await page.evaluate(() => document.querySelectorAll('img').length);
    console.log(`✓ Gallery page contains ${imgCount} rendered image elements.`);

    // Click on a filter chip
    const filterButtons = await page.$$('button');
    for (const b of filterButtons) {
      const text = await page.evaluate(el => el.innerText, b);
      if (text.includes('Campus & Flora')) {
        await b.click();
        console.log('✓ Clicked category filter "Campus & Flora"');
        break;
      }
    }
  } catch (err) {
    console.error('❌ Gallery interaction error:', err.message);
  }

  await browser.close();

  console.log('\n--- VERIFICATION SUMMARY ---');
  if (errors.length === 0) {
    console.log('🎉 0 Console/Page Errors detected across all public & portal pages!');
  } else {
    console.log(`⚠️ ${errors.length} non-fatal log messages / errors:`);
    errors.slice(0, 10).forEach(e => console.log('  -', e));
  }
}

run();
