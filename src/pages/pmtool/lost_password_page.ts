import { Locator, Page } from "@playwright/test";
import { LoginPage } from "./login_page.ts";

export class LostPasswordPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly usernameInput: Locator;
  readonly sentButton: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator(
      ":nth-child(3) > .input-icon > .form-control"
    );
    this.usernameInput = page.locator(
      ":nth-child(2) > .input-icon > .form-control"
    );
    this.sentButton = page.locator(".btn-info");
    this.backButton = page.locator("#back-btn");
  }

  async clickSent() {
    await this.sentButton.click();
    return new LoginPage(this.page);
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
    return this;
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
    return this;
  }

  async clickBack() {
    await this.backButton.click();
    return new LoginPage(this.page);
  }
}
