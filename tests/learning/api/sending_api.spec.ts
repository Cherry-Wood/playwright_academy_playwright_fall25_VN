import { test } from "@playwright/test";

// ? Parametr request nám umožňuje práci s API (posílání, konfigurace...)
test("Send GET Request", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/train");
});

test("GET Request with URL Parameter", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/eshop", {
    params: {
      userId: 123,
    },
  });
});

test("GET Request with Header", async ({ request }) => {
  await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train/header",
    {
      headers: {
        train: "request s hlavickou",
      },
    }
  );
});

test("POST Request with JSON Body", async ({ request }) => {
  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train/body",
    {
      data: {
        stringProperty: "Čus",
        numberProperty: 520,
        booleanProperty: true,
      },
    }
  );
});
