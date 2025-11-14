import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly url = "https://tredgate.com/pmtool"; // ? Bude hen v prvním PO, kde budeme otevírat aplikaci.
  readonly usernameImput: Locator;
  readonly passwordImput: Locator;
  readonly loginButton: Locator;
  readonly lostpasswordButton: Locator;

  constructor(page: Page) {
    this.page = page; // ? Nastavení stránky abychom mohli interagovat s browserem
    this.usernameImput = page.locator("#username");
    this.passwordImput = page.locator("#password");
    this.loginButton = page.locator('[type="submit"]');
    this.lostpasswordButton = page.locator("#forget_password");
  }

  async open() {
    await this.page.goto(this.url);
  }

  async fillUsername(username: string) {
    await this.usernameImput.fill(username);
  }

  async fillPassword(password: string) {
    await this.passwordImput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }

  async clickPasswordForgotten() {
    await this.lostpasswordButton.click();
  }
}
