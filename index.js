const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrollHeroList(page) {
  await page.evaluate(async () => {
    const scrollContainer = document.querySelector('[data-node="2684910"]');
    if (!scrollContainer) return;

    await new Promise((resolve) => {
      let totalScroll = 0;
      const distance = 300;
      const timer = setInterval(() => {
        const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        scrollContainer.scrollBy(0, distance);
        totalScroll += distance;

        if (totalScroll >= maxScroll) {
          clearInterval(timer);
          resolve();
        }
      }, 500);
    });
  });
}

async function main() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto("https://m.mobilelegends.com/rank", {
    waitUntil: "networkidle2",
  });

  for (let i = 0; i < 10; i++) {
    await scrollHeroList(page);
    await page.waitForTimeout(2000);
  }

  const heroes = await page.evaluate(() => {
    const heroItems = document.querySelectorAll(
      '[data-node="2684910"] > div'
    );

    return Array.from(heroItems).map((item) => {
      const name = item.querySelector('[data-node="2693412"] span')?.innerText;
      const icon = item.querySelector('[data-node="2684911"] img')?.src;
      const pickrate = item.querySelector(
        '[data-node="2684925"] span'
      )?.innerText;
      const winrate = item.querySelector(
        '[data-node="2684926"] span'
      )?.innerText;
      const banrate = item.querySelector(
        '[data-node="2687632"] span'
      )?.innerText;

      return { name, icon, winrate, banrate, pickrate };
    });
  });

  fs.writeFileSync("winrate.json", JSON.stringify(heroes, null, 2));

  console.log(`Sukses! Total hero yang diambil: ${heroes.length}`);
  await browser.close();
}

main();
