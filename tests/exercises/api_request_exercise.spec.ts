import { test } from "@playwright/test";

test("Send Api Request exercise", async ({ request }) => {
  await request.get("https://www.tredgate.cloud/courses");
});
