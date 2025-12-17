import { expect, Locator, Page } from "@playwright/test";
import { AccountRegister } from "./account/account_register.ts";

export class HomePage {
  readonly page: Page;
  readonly url = "https://tredgate.com/eshop";
  readonly myaccountToggle: Locator;
  readonly registerButton: Locator;
  readonly pageLogo: Locator;
  readonly shoppingcartButton: Locator;
  readonly searchInput: Locator;
  readonly featuredHeader: Locator;
  readonly footerFirstColumnHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myaccountToggle = page.locator("#top-links a i.fa-user");
    this.registerButton = page.locator(
      '.dropdown-menu a[href="https://tredgate.com/eshop/index.php?route=account/register"]'
    );
    this.pageLogo = page.locator("#logo");
    this.shoppingcartButton = page.locator("#cart");
    this.searchInput = page.locator("#search input");
    this.featuredHeader = page.locator("#content h3");
    this.footerFirstColumnHeader = page.locator(
      "//footer//div[@class='row']/div[1]/h5"
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

  async assertLogoVisible() {
    await expect(this.pageLogo, "Page Logo is visible").toBeVisible();
    return this;
  }

  async assertShopingcartButtonVisible() {
    await expect(
      this.shoppingcartButton,
      "Shoping Cart button is visible"
    ).toBeVisible();
    return this;
  }

  async assertSearchHavePlaceholder(placeholderText: string) {
    await expect(
      this.searchInput,
      "Search input has expected placeholder text"
    ).toHaveAttribute("placeholder", placeholderText);
    return this;
  }

  async assertFeaturedHeaderHaveText(text: string) {
    await expect(
      this.featuredHeader,
      "Featured header is visible"
    ).toBeVisible();
    await expect(this.featuredHeader, "Featured header have text").toHaveText(
      text
    );
    return this;
  }

  async assertFooterFistColumnHeaderHaveText(text: string) {
    await expect(
      this.footerFirstColumnHeader,
      "First column is visible"
    ).toBeVisible();
    await expect(
      this.footerFirstColumnHeader,
      "Footer first column header have text"
    ).toHaveText(text);
    return this;
  }
}
