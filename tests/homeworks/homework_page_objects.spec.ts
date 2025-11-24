import { test } from "@playwright/test";
import { fakerCS_CZ as faker } from "@faker-js/faker";
import { HomePage } from "../../src/pages/tredgate-eshop/home_page.ts";

test("Domácí úkol: Page Objecty", async ({ page }) => {
  const homePage = new HomePage(page);

  const firstName = faker.person.firstName("female");
  const lastName = faker.person.lastName("female");
  const email = faker.internet.email({
    firstName: firstName,
    lastName: lastName,
    provider: "fake.testmail",
  });
  const phone = faker.phone.number({ style: "international" });
  const password = faker.internet.password();

  console.log(email);

  await homePage
    .open()
    .then((home) => home.clickMyAccount())
    .then((home) => home.clickRegister())
    .then((register) => register.fillFirstname(firstName))
    .then((register) => register.fillLastname(lastName))
    .then((register) => register.fillEmail(email))
    .then((register) => register.fillPhone(phone))
    .then((register) => register.fillPassword(password))
    .then((register) => register.fillPasswordConfirm(password))
    .then((register) => register.clickContinue());
});
