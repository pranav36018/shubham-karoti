import puppeteer from 'puppeteer-core';

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

async function run() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle2" });
  await new Promise(r => setTimeout(r, 1200));

  await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('h2')).find(h => h.textContent.includes('Day in the Life'));
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: "screenshots_redesign/dinacharya_unboxed_1440.png" });
  console.log("✓ Saved dinacharya_unboxed_1440.png");

  // Also click River of Time to verify
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Continuous River'));
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: "screenshots_redesign/dinacharya_river_1440.png" });
  console.log("✓ Saved dinacharya_river_1440.png");

  await browser.close();
}

run().catch(console.error);
