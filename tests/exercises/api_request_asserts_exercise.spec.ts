import { test, expect } from "@playwright/test";

test("Exercise: response body assert", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/4"
  );
  const responseBody = await response.json();

  expect(responseBody, "Body have userId").toHaveProperty("userId");
  expect(typeof responseBody, "Datový typ active is number").toEqual("number");
  expect(
    responseBody.username,
    "responseBody.username has Correct Value"
  ).toEqual("petrfifka");
});
