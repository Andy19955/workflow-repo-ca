import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("user can login", async ({ page }) => {
    await page.route("*/**/auth/login", (route) =>
      route.fulfill({
        status: 200,
        json: { name: "Test", email: "test@noroff.no" },
      }),
    );

    await page.goto("/login");

    await page.locator("input[name='email']").fill(process.env.TEST_USER_EMAIL);
    await page
      .locator("input[name='password']")
      .fill(process.env.TEST_USER_PASSWORD);

    await page.getByRole("button", { type: "submit" }).click();

    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("wrong password shows error", async ({ page }) => {
    await page.goto("/login");

    await page.locator("input[name='email']").fill(process.env.TEST_USER_EMAIL);
    await page.locator("input[name='password']").fill("wrongpassword");

    await page.getByRole("button", { type: "submit" }).click();

    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
