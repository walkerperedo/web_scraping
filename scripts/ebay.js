const fs = require("fs");
const path = require("path");

module.exports = async (page, website) => {
  const { selectors } = website;

  await page.goto(website.url);
  await page.waitForSelector(selectors.searchBar);
  await page.type(selectors.searchBar, "laptops");
  await page.waitForSelector(selectors.searchButton);
  await page.click(selectors.searchButton);
  await page.waitForSelector(selectors.itemTitle);
  await page.evaluate((itemTitle) => {
    const titles = document.querySelectorAll(itemTitle);
    const parsedTitles = [];

    for (const title of titles) {
      parsedTitles.push(title.innerText);
    }

    console.log(parsedTitles);
  }, selectors.itemTitle);
};
