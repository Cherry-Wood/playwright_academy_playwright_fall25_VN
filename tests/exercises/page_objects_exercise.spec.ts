import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";
import { DashboardPage } from "../../src/pages/pmtool/dashboard_page.ts";

test("PageObjects Exercise - Login and Logout", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.fillUsername("pw_academy");
  await loginPage.fillPassword("Playwright321!");
  await loginPage.clickLogin();

  const dashboardPage = new DashboardPage(page);

  await dashboardPage.clickProfile();
  await dashboardPage.clickLogout();
});
