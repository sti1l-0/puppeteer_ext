const puppeteer = require('puppeteer');

(async () => {
  const pathToExtension = require('path').join(__dirname, 'pro_1.0.23');
  const browser = await puppeteer.launch({
    headless :false,
    userDataDir: './ChromeSession'
  });
  const page = await browser.newPage();
  await page.goto('https://onlineservices.immigration.govt.nz/WorkingHoliday/');

})();