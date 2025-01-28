import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.goto("https://rahulshettyacademy.com/angularpractice/shop");
});

test.describe.parallel("Shop Case", () => {
	test("Form ", async ({ page }) => {
		await page
			.locator("app-card")
			.filter({ hasText: "iphone X $24.99 Lorem ipsum" })
			.getByRole("button")
			.click();
		await page
			.locator("app-card")
			.filter({ hasText: "Samsung Note 8 $24.99 Lorem" })
			.getByRole("button")
			.click();
		await page
			.locator("app-card")
			.filter({ hasText: "Nokia Edge $24.99 Lorem ipsum" })
			.getByRole("button")
			.click();
		await page
			.locator("app-card")
			.filter({ hasText: "Blackberry $24.99 Lorem ipsum" })
			.getByRole("button")
			.click();
		await page.getByText("Checkout ( 4 ) (current)").click();
		await page
			.getByRole("row", { name: "iphone X by Sim cart Status:" })
			.locator("#exampleInputEmail1")
			.click();
		await page
			.getByRole("row", { name: "Samsung Note 8 by Sim cart" })
			.locator("#exampleInputEmail1")
			.click();
		await page
			.getByRole("row", {
				name: "Blackberry by Sim cart Status",
			})
			.getByRole("button")
			.click();
		await page.getByRole("button", { name: "Checkout" }).click();
		// await page.getByText("I agree with the term &").click();
		await page.getByLabel("Please choose your delivery").click();
		await page
			.getByLabel("Please choose your delivery")
			.fill("indonesia");
		await page.keyboard.press("Enter");
		await page.getByText("Indonesia").click();
		await page.getByRole("button", { name: "Purchase" }).click();
	});
});
