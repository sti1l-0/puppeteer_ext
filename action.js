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
  // await page.goto('https://onlineservices.immigration.govt.nz/WorkingHoliday/');
  await page.goto('https://www.google.com/recaptcha/api2/demo');

  // 检测识别成功功能
  // recaptcha-checkbox-unchecked
  let frame = null;
  for (let _frame of page.frames()) {
    if (await _frame.title() == 'reCAPTCHA') {
      frame = _frame;
      break;
    }
    else{
      continue;
    }
  }
  await frame.waitForSelector('.recaptcha-checkbox-border', {hidden:true,timeout:3000}).then(console.log(123));
  await (await frame.$('.recaptcha-checkbox-border')).isVisible();
})();