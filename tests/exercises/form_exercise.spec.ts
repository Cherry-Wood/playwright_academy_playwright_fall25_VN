import { test } from "@playwright/test";

test("Cvičení vyplnění formuláře", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/contact.html");
  await page.locator('[data-testid="input-name"]').fill("Václav Novotný");
  await page
    .locator('[data-testid="input-email"]')
    .fill("something@something.test");
  await page.locator('[data-testid="input-contact-date"]').fill("2025-11-29");
  await page.locator('[data-testid="select-role"]').selectOption("instructor");
  await page
    .locator('[data-testid="textarea-comments"]')
    .fill("Dlouhý komentář");
  await page.locator('[data-testid="checkbox-newsletter"]').check();
  await page.locator('[data-testid="button-submit"]').click();
});
