import { expect, Locator, Page } from "@playwright/test";

export class DashboardPage {
  readonly page: Page;
  readonly buttonProfile: Locator;
  readonly buttonLogout: Locator;
  readonly bellButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonProfile = page.locator("#user_dropdown");
    this.buttonLogout = page.locator("#logout");
    this.bellButton = page.locator("#user_notifications_report");
  }

  async clickProfile() {
    await expect(this.bellButton).toBeVisible();
    await this.buttonProfile.click();
  }

  async clickLogout() {
    await this.buttonLogout.click();
  }
}
