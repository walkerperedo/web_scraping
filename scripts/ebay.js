const fs = require("fs");
const path = require("path");

module.exports = async (page, website) => {
  const { selectors } = website;

  await page.goto(website.url);
  await page.waitForSelector(selectors.searchBar);
  await page.type(selectors.searchBar, "laptops");
};
