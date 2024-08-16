import  {allure}  from "allure-playwright";

async function attachScreenshot(page, name) {
  const screenshot = await page.screenshot();
  await allure.attachment(`${name}.png`, screenshot, 'image/png');
}

module.exports = { attachScreenshot };