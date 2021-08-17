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

  console.log(trendsText);
};
