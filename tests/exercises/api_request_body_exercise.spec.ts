import { faker } from "@faker-js/faker";
import { test } from "@playwright/test";

test("Exercise request with body", async ({ request }) => {
  const name =
    faker.internet.username() + "_" + faker.number.int({ max: 1_000_000 });
  const password = faker.person.lastName("female");
  const email = faker.internet.exampleEmail();
  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/register",
    {
      data: {
        username: name,
        password,
        email,
      },
    }
  );
});
