import { test } from "@playwright/test";
import { LoginPage } from "../../src/pages/pmtool/login_page.ts";

test("Test lost password using fluent: fill lost password info", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  await loginPage
    .open()
    .then((login) => login.clickPasswordForgotten())
    .then((lostPassword) => lostPassword.fillEmail("lost_password@tredgate.cz"))
    .then((lostPassword) => lostPassword.fillUsername("lost_password_user"))
    .then((lostPassword) => lostPassword.clickSent());
});

test("Test lost password using fluent: right back to login", async ({
  page,
}) => {
  const loginPage = new LoginPage(page);
  await loginPage
    .open()
    .then((login) => login.clickPasswordForgotten())
    .then((lostPassword) => lostPassword.clickBack());
});
