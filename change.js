const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/recaptcha/api2/demo');


  await page.evaluate(() => {
    const targetNode = document.querySelector('#myElement');
    const config = { attributes: true, childList: true, subtree: true };

    const observer = new MutationObserver((mutationsList, observer) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-status' && mutation.target.getAttribute('data-status') === 'complete') {
          myFunction();
        }
      }
    });

    observer.observe(targetNode, config);
  });

  await browser.close();
}

run();

function myFunction() {
  console.log('The data-status attribute of #myElement is now "complete"!');
}