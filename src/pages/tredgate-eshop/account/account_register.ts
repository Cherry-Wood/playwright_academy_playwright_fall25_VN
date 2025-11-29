import { Locator, Page } from "@playwright/test";
import { HomePage } from "../home_page.ts";

export class AccountRegister {
  readonly page: Page;
  readonly firstnameInput: Locator;
  readonly lastnameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly passwordInput: Locator;
  readonly passwordConfirmInput: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstnameInput = page.locator("#input-firstname");
    this.lastnameInput = page.locator("#input-lastname");
    this.emailInput = page.locator("#input-email");
    this.phoneInput = page.locator("#input-telephone");
    this.passwordInput = page.locator("#input-password");
    this.passwordConfirmInput = page.locator("#input-confirm");
    this.continueButton = page.locator('input[type="submit"]');
  }

  async fillFirstname(firstname: string) {
    await this.firstnameInput.fill(firstname);
    return this;
  }

  async fillLastname(lastname: string) {
    await this.lastnameInput.fill(lastname);
    return this;
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
    return this;
  }

  async fillPhone(phone: string) {
    await this.phoneInput.fill(phone);
    return this;
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
    return this;
  }

  async fillPasswordConfirm(passwordConfirm: string) {
    await this.passwordConfirmInput.fill(passwordConfirm);
    return this;
  }

  async clickContinue() {
    await this.continueButton.click();
    return new HomePage(this.page);
  }
}
