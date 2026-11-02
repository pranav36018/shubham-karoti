// take_redesign_screenshots.js
import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const BASE_URL = "http://localhost:5173";
const OUTPUT_DIR = "c:\\Shubham Karothi\\frontend\\screenshots_redesign";

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function capture() {
  console.log('Capturing rendered pages with new editorial layout...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // 1. Desktop 1440px
  console.log('1. Capturing Desktop (1440x900)...');
  await page.setViewport({ width: 1440, height: 900 });

  const pages1440 = [
    { path: '/', name: '01_home_1440.png' },
    { path: '/our-story', name: '02_our_story_1440.png' },
    { path: '/our-philosophy', name: '03_philosophy_1440.png' },
    { path: '/education-activities', name: '04_education_1440.png' },
    { path: '/life-at-gurukula', name: '05_life_1440.png' },
    { path: '/child-journey', name: '06_child_journey_1440.png' },
    { path: '/gallery', name: '07_gallery_1440.png' },
    { path: '/support-our-mission', name: '08_support_1440.png' },
    { path: '/contact', name: '09_contact_1440.png' }
  ];

  for (const p of pages1440) {
    await page.goto(`${BASE_URL}${p.path}`, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.join(OUTPUT_DIR, p.name), fullPage: true });
    console.log(`✓ Saved ${p.name}`);
  }

  // 2. High-res Desktop 1920px (Home)
  console.log('2. Capturing 1920x1080 Viewport (Home)...');
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '10_home_1920.png'), fullPage: true });
  console.log('✓ Saved 10_home_1920.png');

  // 3. Tablet 768px (Home)
  console.log('3. Capturing Tablet 768x1024 Viewport (Home)...');
  await page.setViewport({ width: 768, height: 1024 });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '11_home_768_tablet.png'), fullPage: true });
  console.log('✓ Saved 11_home_768_tablet.png');

  // 4. Mobile 390px (Home)
  console.log('4. Capturing Mobile 390x844 Viewport (Home)...');
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '12_home_390_mobile.png'), fullPage: true });
  console.log('✓ Saved 12_home_390_mobile.png');

  await browser.close();
  console.log('All redesign screenshots saved successfully to:', OUTPUT_DIR);
}

capture().catch(console.error);
