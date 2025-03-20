const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto('https://m.mobilelegends.com/');
  
  const title = await page.title();
  console.log('Page Title:', title);
  
  const fs = require('fs');
  fs.writeFileSync('result.txt', `Title: ${title}`);
  
  await browser.close();
})();
