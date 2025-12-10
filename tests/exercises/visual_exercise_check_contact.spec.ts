import { expect, test } from "@playwright/test";

test("Simple Visual Test", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/contact.html");
  await expect(page).toHaveScreenshot("contact_test.png");
});
