import puppeteer from 'puppeteer-core';

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

async function inspect() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle2" });
  await new Promise(r => setTimeout(r, 1000));

  // Capture full page screenshot to inspect every section
  await page.screenshot({ path: "screenshots_redesign/current_full_inspection.png", fullPage: true });
  console.log("✓ Saved current_full_inspection.png");

  await browser.close();
}

inspect().catch(console.error);
