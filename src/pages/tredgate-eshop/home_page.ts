import { Locator, Page } from "@playwright/test";
import { AccountRegister } from "./account/account_register.ts";

export class HomePage {
  readonly page: Page;
  readonly url = "https://tredgate.com/eshop";
  readonly myaccountToggle: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myaccountToggle = page.locator("#top-links a i.fa-user");
    this.registerButton = page.locator(
      '.dropdown-menu a[href="https://tredgate.com/eshop/index.php?route=account/register"]'
    );
  }

  async open() {
    await this.page.goto(this.url);
    return this;
  }

  async clickMyAccount() {
    await this.myaccountToggle.click();
    return this;
  }

  async clickRegister() {
    await this.registerButton.click();
    return new AccountRegister(this.page);
  }
}
