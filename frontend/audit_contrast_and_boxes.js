import puppeteer from 'puppeteer-core';

const EDGE_PATH = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

async function runAudit() {
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const routes = [
    { name: 'Home', url: 'http://localhost:5173/' },
    { name: 'OurStory', url: 'http://localhost:5173/our-story' },
    { name: 'Philosophy', url: 'http://localhost:5173/our-philosophy' },
    { name: 'Education', url: 'http://localhost:5173/education-activities' },
    { name: 'Life', url: 'http://localhost:5173/life-at-gurukula' },
    { name: 'ChildJourney', url: 'http://localhost:5173/child-journey' },
    { name: 'Gallery', url: 'http://localhost:5173/gallery' },
    { name: 'Support', url: 'http://localhost:5173/support-our-mission' },
    { name: 'Contact', url: 'http://localhost:5173/contact' }
  ];

  for (const r of routes) {
    console.log(`\n=== Auditing ${r.name} (${r.url}) ===`);
    await page.goto(r.url, { waitUntil: 'networkidle2' });
    await new Promise(res => setTimeout(res, 500));

    const findings = await page.evaluate(() => {
      const results = {
        lowContrastOrInvisible: [],
        roundedCards: [],
        hoverOnlyHints: []
      };

      // 1. Check for rounded boxes / cards
      const elements = Array.from(document.querySelectorAll('*'));
      elements.forEach(el => {
        const cls = el.className || '';
        if (typeof cls === 'string') {
          if (cls.includes('rounded-3xl') || cls.includes('rounded-2xl')) {
            if (cls.includes('bg-white') || cls.includes('shadow') || cls.includes('border')) {
              results.roundedCards.push({
                tag: el.tagName,
                classes: cls.slice(0, 80),
                textSnippet: el.innerText ? el.innerText.slice(0, 40).replace(/\n/g, ' ') : ''
              });
            }
          }
          if (cls.includes('group-hover') || cls.includes('hover:opacity')) {
            results.hoverOnlyHints.push({
              tag: el.tagName,
              classes: cls.slice(0, 80),
              textSnippet: el.innerText ? el.innerText.slice(0, 30).replace(/\n/g, ' ') : ''
            });
          }
        }

        // Check computed style for opacity < 0.6
        const style = window.getComputedStyle(el);
        const opacity = parseFloat(style.opacity);
        if (opacity > 0 && opacity < 0.7 && el.innerText && el.innerText.trim().length > 0) {
          results.lowContrastOrInvisible.push({
            tag: el.tagName,
            opacity: opacity,
            color: style.color,
            textSnippet: el.innerText.slice(0, 40).replace(/\n/g, ' ')
          });
        }
      });

      return {
        roundedCardCount: results.roundedCards.length,
        roundedCardSamples: results.roundedCards.slice(0, 5),
        hoverCount: results.hoverOnlyHints.length,
        hoverSamples: results.hoverOnlyHints.slice(0, 5),
        lowOpacityCount: results.lowContrastOrInvisible.length,
        lowOpacitySamples: results.lowContrastOrInvisible.slice(0, 5)
      };
    });

    console.log(`Rounded Box Cards: ${findings.roundedCardCount}`);
    if (findings.roundedCardSamples.length > 0) {
      console.log('Sample boxes:', findings.roundedCardSamples);
    }
    console.log(`Hover/Opacity dependent items: ${findings.hoverCount}`);
    if (findings.hoverSamples.length > 0) {
      console.log('Sample hover items:', findings.hoverSamples);
    }
    console.log(`Low Opacity (<0.7) text items: ${findings.lowOpacityCount}`);
    if (findings.lowOpacitySamples.length > 0) {
      console.log('Sample low opacity text:', findings.lowOpacitySamples);
    }
  }

  await browser.close();
}

runAudit().catch(console.error);
