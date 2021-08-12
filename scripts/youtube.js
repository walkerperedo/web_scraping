module.exports = async (page, website) => {
  const { url, selectors } = website;
  await page.goto(url);
  await page.waitForSelector(selectors.trendsLink);
  await page.click(selectors.trendsLink);
};
