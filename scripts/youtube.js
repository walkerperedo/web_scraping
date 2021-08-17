const fs = require("fs");
const path = require("path");

module.exports = async (page, website) => {
  const { url, selectors } = website;
  await page.goto(url);

  await page.waitForSelector(selectors.trendsLink);

  await page.click(selectors.trendsLink);

  // para pasar variable al evaluate se le hace a travez del segundo argumento del evaluate
  await page.waitForSelector(selectors.trendListTags);

  const trendsText = await page.evaluate((trendListTags) => {
    const trendList = document.querySelectorAll(trendListTags);
    const trendsText = [];

    for (const trend of trendList) {
      trendsText.push(trend.innerText);
    }

    return trendsText;
  }, selectors.trendListTags);

  const regExp = new RegExp("[A-z]+");
  const trendsFormatted = trendsText.map((text) => {
    const textSplitted = text.split("\n").filter((txt) => regExp.test(txt));
    return {
      name: textSplitted[0],
      channel: textSplitted[1],
      views: textSplitted[2],
      dtAdded: textSplitted[3],
    };
  });

  fs.writeFileSync(
    path.join(__dirname, `${website.scriptName}.json`),
    JSON.stringify(trendsFormatted),
    "utf8"
  );
};
