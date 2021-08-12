const puppeteer = require("puppeteer");
const websites = require("./websites.json");
(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: "/usr/bin/google-chrome",
  });
  const page = await browser.newPage();
  await page.goto("https://www.google.com/");
  await page.type(
    "body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input",
    "facebook"
  );
  await page.click(
    "body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b"
  );
  for (const website of websites) {
    console.log(website);
  }
})();
