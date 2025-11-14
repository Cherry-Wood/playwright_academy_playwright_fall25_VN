import { Locator, Page } from "@playwright/test";

export class LostPasswordPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly usernameInput: Locator;
  readonly sentButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator(
      ":nth-child(3) > .input-icon > .form-control"
    );
    this.usernameInput = page.locator(
      ":nth-child(2) > .input-icon > .form-control"
    );
    this.sentButton = page.locator(".btn-info");
  }

  async clickSent() {
    await this.sentButton.click();
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }
}
