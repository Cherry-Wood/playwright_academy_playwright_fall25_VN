import { test } from "@playwright/test";

test("Homework hw intro test", async ({ page }) => {
  await page.goto("https://tredgate.com/eshop/");
  await page.locator('[name="search"]').fill("iPhone");
  await page.locator('#search [type="button"]').click();
  await page.locator('//a[text()="iPhone"]').click();
  await page.locator("#button-cart").click();
});
