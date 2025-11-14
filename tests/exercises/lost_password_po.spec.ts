import { test } from "@playwright/test";
import { LostPasswordPage } from "../../src/pages/pmtool/lost_password_page.ts";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";

test("PageObjects Exercise - Lost Password", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.clickPasswordForgotten();

  const lostPasswordPage = new LostPasswordPage(page);

  await lostPasswordPage.fillEmail("test@tredgate.cz");
  await lostPasswordPage.fillUsername("test");
  await lostPasswordPage.clickSent();
});
