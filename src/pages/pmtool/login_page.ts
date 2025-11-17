import { Locator, Page } from "@playwright/test";
import { DashboardPage } from "./dashboard_page.ts";
import { LostPasswordPage } from "./lost_password_page.ts";

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
    return this; // ? Po otevření zůstávám na login page
  }

  async fillUsername(username: string) {
    await this.usernameImput.fill(username);
    return this;
  }

  async fillPassword(password: string) {
    await this.passwordImput.fill(password);
    return this;
  }

  async clickLogin() {
    await this.loginButton.click();
    return new DashboardPage(this.page); // ? Po kliknutí na tlačítko Login, program pokračuje na Dashboard - proto používáme return new DashboardPage (jdeme na jinou stránku)
  }

  // ? Explicitní typovou anotaci používáme zejména při komplexních metodách, abychom i do budoucnosti (když se bude měnit obsah této metody) měli jasno, kam tato metoda bude pokračovat.
  async login(username: string, password: string): Promise<DashboardPage> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
    return new DashboardPage(this.page);
  }

  async clickPasswordForgotten() {
    await this.lostpasswordButton.click();
    return new LostPasswordPage(this.page);
  }
}
