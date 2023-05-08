const puppeteer = require('puppeteer');

(async () => {
  const pathToExtension = require('path').join(__dirname, 'pro_1.0.23');
  const browser = await puppeteer.launch({
    headless :false,
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
  });
  const page = await browser.newPage();
  await page.goto('https://yescaptcha.com/auth/login?next=%2Fdashboard.html');

  for(i=0;i<3;i++){
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({path: 'example'+i+'.png'});
  }
})();