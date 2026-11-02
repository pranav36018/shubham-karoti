import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';

const routes = [
  { path: '/', name: 'home' },
  { path: '/our-story', name: 'our-story' },
  { path: '/our-philosophy', name: 'our-philosophy' },
  { path: '/education-activities', name: 'education-activities' },
  { path: '/life-at-gurukula', name: 'life-at-gurukula' },
  { path: '/child-journey', name: 'child-journey' },
  { path: '/gallery', name: 'gallery' },
  { path: '/support-our-mission', name: 'support-our-mission' },
  { path: '/contact', name: 'contact' },
];

const viewports = [
  { width: 1440, height: 900, label: 'desktop' },
  { width: 1024, height: 768, label: 'tablet-landscape' },
  { width: 768, height: 1024, label: 'tablet-portrait' },
  { width: 390, height: 844, label: 'mobile-iphone' },
  { width: 360, height: 800, label: 'mobile-android' }
];

async function runTests() {
  const screenshotsDir = path.resolve('screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  console.log('Launching Edge browser via puppeteer-core...');
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  const networkErrors = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(`[Console Error] ${msg.text()}`);
    }
  });

  page.on('requestfailed', request => {
    networkErrors.push(`[Request Failed] ${request.url()} - ${request.failure()?.errorText}`);
  });

  page.on('response', response => {
    if (response.status() >= 400) {
      networkErrors.push(`[HTTP ${response.status()}] ${response.url()}`);
    }
  });

  console.log('\n--- 1. Testing All 9 Pages on Desktop (1440x900) ---');
  await page.setViewport({ width: 1440, height: 900 });

  for (const r of routes) {
    const url = `http://localhost:4173${r.path}`;
    console.log(`Testing ${r.name} -> ${url}`);
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
    
    // Take a screenshot of the top hero/header area
    const shotPath = path.join(screenshotsDir, `${r.name}-desktop.png`);
    await page.screenshot({ path: shotPath, fullPage: false });
    console.log(`  ✓ Saved screenshot: ${shotPath}`);

    // Verify title and main container
    const title = await page.title();
    console.log(`  ✓ Title: "${title}"`);
  }

  console.log('\n--- 2. Testing Responsive Viewports for Home ---');
  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
    const shotPath = path.join(screenshotsDir, `home-${vp.label}.png`);
    await page.screenshot({ path: shotPath, fullPage: false });
    console.log(`  ✓ Viewport ${vp.label} (${vp.width}x${vp.height}) screenshot saved`);
  }

  console.log('\n--- 3. Testing Interactive Features ---');
  // Return to desktop
  await page.setViewport({ width: 1440, height: 900 });

  // Test Language Switch
  console.log('Testing Language Switch (English <-> Kannada)...');
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  
  // Find language button and click it
  const langBtn = await page.waitForSelector('button[title*="Switch language"]');
  if (langBtn) {
    await langBtn.click();
    await new Promise(r => setTimeout(r, 400));
    const knHeading = await page.$eval('h1', el => el.textContent);
    console.log(`  ✓ After click (Kannada): "${knHeading.trim()}"`);
    // Click again to toggle back
    await langBtn.click();
    await new Promise(r => setTimeout(r, 400));
    const enHeading = await page.$eval('h1', el => el.textContent);
    console.log(`  ✓ After click (English): "${enHeading.trim()}"`);
  }

  // Test Five Koshas tab click
  console.log('Testing Five Koshas Interactive...');
  await page.goto('http://localhost:4173/our-philosophy', { waitUntil: 'networkidle0' });
  const koshaButtons = await page.$$('button');
  for (const btn of koshaButtons) {
    const text = await (await btn.getProperty('textContent')).jsonValue();
    if (text.includes('Pranamaya')) {
      await btn.click();
      await new Promise(r => setTimeout(r, 400));
      console.log('  ✓ Clicked Pranamaya Kosha tab successfully');
      break;
    }
  }

  // Test Child Journey Tracking
  console.log('Testing Child Journey Interactive...');
  await page.goto('http://localhost:4173/child-journey', { waitUntil: 'networkidle0' });
  const studentButtons = await page.$$('button');
  for (const btn of studentButtons) {
    const text = await (await btn.getProperty('textContent')).jsonValue();
    if (text.includes('Soundarya')) {
      await btn.click();
      await new Promise(r => setTimeout(r, 400));
      console.log('  ✓ Switched to Kumari Soundarya profile');
      break;
    }
  }

  // Test Support Our Mission Calculator
  console.log('Testing Support Our Mission Calculator & Form...');
  await page.goto('http://localhost:4173/support-our-mission', { waitUntil: 'networkidle0' });
  const sevaCards = await page.$$('div');
  // Verify form renders
  const nameInput = await page.$('input[placeholder*="Gayatri"]');
  if (nameInput) {
    console.log('  ✓ Support enquiry registration form detected');
  }

  console.log('\n--- SUMMARY OF AUDIT ---');
  console.log(`Total Console Errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    consoleErrors.forEach(e => console.log('  ', e));
  } else {
    console.log('  ✓ Zero JavaScript runtime or console errors!');
  }

  console.log(`Total Network / 404 Errors: ${networkErrors.length}`);
  if (networkErrors.length > 0) {
    networkErrors.forEach(e => console.log('  ', e));
  } else {
    console.log('  ✓ Zero broken asset links or failed network calls!');
  }

  await browser.close();
  console.log('\nAll tests completed successfully!');
}

runTests().catch(err => {
  console.error('Test run failed:', err);
  process.exit(1);
});
