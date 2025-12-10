import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";

test("Exercise Pmtool Login Page Visual Test", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open().then((login) => login.visualCheckLoginForm());
});
