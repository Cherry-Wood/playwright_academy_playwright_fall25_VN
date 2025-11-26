import { expect, test } from "@playwright/test";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";
import { DashboardPage } from "../../src/pages/pmtool/dashboard_page.ts";

test("Exercise: Asserts - kontrola pmtool add project", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login("pw_academy", "Playwright321!");

  const dashboardPage = new DashboardPage(page);
  await dashboardPage.clickProjects();

  const projectTable = page.locator(".table-scrollable table");
  await expect(projectTable, "Projects table is Visible").toBeVisible();
  await page.locator('[test_id="Add Project"]').click();

  const nameInput = page.locator('div[data-testid="Name"] input');
  await expect(nameInput, "Name Input is Visible").toBeVisible();
  const saveButton = page.locator("button[type='submit']");
  await expect(saveButton, "Save Button have text").toHaveText("Save");
});
