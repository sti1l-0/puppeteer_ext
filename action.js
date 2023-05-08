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
  console.log('wait start')
  await new Promise(r => setTimeout(
    ()=>{
      console.log('wait end');
    },
    20000)
  );
  page
    .waitForSelector('#recaptcha-anchor > div.recaptcha-checkbox-checkmark', {visible: true})
    .then(() => console.log('a1'));
  page
    .waitForSelector('#recaptcha-anchor > div.recaptcha-checkbox-checkmark', {visible: false})
    .then(() => console.log('a2'));
  page
    .waitForSelector('#recaptcha-anchor > div.recaptcha-checkbox-checkmark', {hidden: true})
    .then(() => console.log('a3'));
  page
    .waitForSelector('#recaptcha-anchor > div.recaptcha-checkbox-checkmark', {hidden: false})
    .then(() => console.log('a4'));
  page
    .waitForSelector('#recaptcha-anchor > div.recaptcha-checkbox-border', {visible: true})
    .then(() => console.log('b1'));
  page
    .waitForSelector('#recaptcha-anchor > div.recaptcha-checkbox-border', {visible: false})
    .then(() => console.log('b2'));
  page
    .waitForSelector('#recaptcha-anchor > div.recaptcha-checkbox-border', {hidden: true})
    .then(() => console.log('b3'));
  page
    .waitForSelector('#recaptcha-anchor > div.recaptcha-checkbox-border', {hidden: false})
    .then(() => console.log('b4'));
  page
    .waitForSelector('#recaptcha-anchor > div.recaptcha-checkbox-spinner', {visible: true})
    .then(() => console.log('c1'));
  page
    .waitForSelector('#recaptcha-anchor > div.recaptcha-checkbox-spinner', {visible: false})
    .then(() => console.log('c2'));
  page
    .waitForSelector('#recaptcha-anchor > div.recaptcha-checkbox-spinner', {hidden: true})
    .then(() => console.log('c3'));
  page
    .waitForSelector('#recaptcha-anchor > div.recaptcha-checkbox-spinner', {hidden: false})
    .then(() => console.log('c4'));
  browser.close()
})();