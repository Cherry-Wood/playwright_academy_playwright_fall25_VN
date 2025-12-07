import { test } from "@playwright/test";
import { HomePage } from "../../src/pages/tredgate-eshop/home_page.ts";

test.describe("Eshop HomePage asserts", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.open();
  });

  test("Logo and Cart visibility", async () => {
    await homePage
      .assertLogoVisible()
      .then((home) => home.assertShopingcartButtonVisible());
  });

  test("Search placeholder in search field", async () => {
    await homePage.assertSearchHavePlaceholder("Search");
  });

  test("Header texts", async () => {
    await homePage
      .assertFeaturedHeaderHaveText("Featured")
      .then((home) => home.assertFooterFistColumnHeaderHaveText("Information"));
  });
});
