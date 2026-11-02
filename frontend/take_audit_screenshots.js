// take_audit_screenshots.js
import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const BASE_URL = "http://localhost:5173";
const OUTPUT_DIR = "c:\\Shubham Karothi\\frontend\\screenshots_audit";

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function capture() {
  console.log('Starting screenshot audit with Microsoft Edge...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // 1. Home full page & sections
  console.log('Capturing Home at 1440x900...');
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '01_home_1440.png'), fullPage: true });

  // 2. Our Story
  console.log('Capturing Our Story...');
  await page.goto(`${BASE_URL}/our-story`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '02_our_story_1440.png'), fullPage: true });

  // 3. Our Philosophy
  console.log('Capturing Our Philosophy...');
  await page.goto(`${BASE_URL}/our-philosophy`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '03_philosophy_1440.png'), fullPage: true });

  // 4. Education & Activities
  console.log('Capturing Education & Activities...');
  await page.goto(`${BASE_URL}/education-activities`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '04_education_1440.png'), fullPage: true });

  // 5. Gallery
  console.log('Capturing Gallery...');
  await page.goto(`${BASE_URL}/gallery`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '05_gallery_1440.png'), fullPage: true });

  // 6. Mobile 390px Viewport of Home
  console.log('Capturing Mobile (390px) Viewport...');
  await page.setViewport({ width: 390, height: 844, isMobile: true });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(OUTPUT_DIR, '06_home_mobile_390.png'), fullPage: true });

  await browser.close();
  console.log('Audit screenshots saved to:', OUTPUT_DIR);
}

capture().catch(console.error);
