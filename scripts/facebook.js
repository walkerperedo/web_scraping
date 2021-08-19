module.exports = async (page, website) => {
  const { selectors } = website;

  await page.goto(website.url);
  await page.waitForSelector(selectors.emailInput);
  await page.waitForSelector(selectors.passwordInput);
  await page.type(selectors.emailInput, process.env.FACEBOOK_USERNAME);
  await page.type(selectors.passwordInput, process.env.FACEBOOK_PASSWORD);
  await page.waitForSelector(selectors.signInbutton);
  await page.click(selectors.signInbutton);
  await page.waitFor(3000);
  await page.goto(`${website.url}/marketplace`);
};
