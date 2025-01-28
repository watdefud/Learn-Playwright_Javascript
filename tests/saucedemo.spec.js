import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.describe("Sauce demo", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("https://www.saucedemo.com/");
		// await page.setViewportSize({ width: 1920, height: 1080 });
		await page.evaluate(() => {
			document.body.style.zoom = "90%";
		});
	});

	test.describe("Scenario Login", () => {
		test("Login with valid credentials", async ({ page }) => {
			await page.fill("#user-name", "standard_user");
			await page.fill("#password", "secret_sauce");
			await page.click("#login-button");
			await page.screenshot({
				path: "screenshot/saucedemo/1.Login with valid credentials.png",
				fullScreen: true,
			});
			console.log("Screenshot saved in Screenshot folder");
		});
		test("Login with invalid credentials", async ({ page }) => {
			await page.fill("#user-name", "invalid_user");
			await page.fill("#password", "invalid_password");
			await page.click("#login-button");
			await page.screenshot({
				path: "screenshot/saucedemo/2.Login with invalid credentials.png",
				fullScreen: true,
			});
			console.log("Screenshot saved in Screenshot folder");
		});
		test("Login Locked User", async ({ page }) => {
			await page.fill("#user-name", "locked_out_user");
			await page.fill("#password", "secret_sauce");
			await page.click("#login-button");
			await page.screenshot({
				path: "screenshot/saucedemo/3.Locked out user.png",
				fullScreen: true,
			});
			console.log("Screenshot saved in Screenshot folder");
		});
		test("Login with problem user", async ({ page }) => {
			await page.fill("#user-name", "problem_user");
			await page.fill("#password", "secret_sauce");
			await page.click("#login-button");
			await page.screenshot({
				path: "screenshot/saucedemo/4.Login with problem user.png",
				fullScreen: true,
			});
			console.log("Screenshot saved in Screenshot folder");
		});
		test("Login with performance glitch user", async ({ page }) => {
			await page.fill("#user-name", "performance_glitch_user");
			await page.fill("#password", "secret_sauce");
			await page.click("#login-button");
			await page.screenshot({
				path: "screenshot/saucedemo/5.Login with performance glitch user.png",
				fullScreen: true,
			});
			console.log("Screenshot saved in Screenshot folder");
		});
		test("Login with error user", async ({ page }) => {
			await page.fill("#user-name", "error_user");
			await page.fill("#password", "secret_sauce");
			await page.click("#login-button");
			await page.screenshot({
				path: "screenshot/saucedemo/6.Login with error user.png",
				fullScreen: true,
			});
			console.log("Screenshot saved in Screenshot folder");
		});
		test("Login with visual_user", async ({ page }) => {
			await page.fill("#user-name", "visual_user");
			await page.fill("#password", "secret_sauce");
			await page.click("#login-button");
			await page.screenshot({
				path: "screenshot/saucedemo/7.Login with visual_user.png",
				fullScreen: true,
			});
			console.log("Screenshot saved in Screenshot folder");
		});
	});

	test.describe("Scenario Add to Cart", () => {
		test("Add product to cart", async ({ page }) => {
			await page.fill("#user-name", "standard_user");
			await page.fill("#password", "secret_sauce");
			await page.click("#login-button");

			await page.click(
				'[data-test="add-to-cart-sauce-labs-backpack"]'
			);
			await page.click(
				'[data-test="add-to-cart-sauce-labs-bike-light"]'
			);
			await page.click(
				'[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]'
			);
			await page.click(
				'[data-test="add-to-cart-sauce-labs-fleece-jacket"]'
			);
			await page.click(
				'[data-test="add-to-cart-sauce-labs-onesie"]'
			);
			await page.click(
				'[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
			);
			await page.screenshot({
				path: "screenshot/saucedemo/8.Add product to cart.png",
				fullScreen: true,
			});
			console.log("Screenshot saved in Screenshot folder");
		});
	});

	test.describe("Scenario Checkout", () => {
		test("Checkout added product", async ({ page }) => {
			await page.fill("#user-name", "standard_user");
			await page.fill("#password", "secret_sauce");
			await page.click("#login-button");

			await page.click(
				'[data-test="add-to-cart-sauce-labs-backpack"]'
			);
			await page.click(
				'[data-test="add-to-cart-sauce-labs-bike-light"]'
			);
			await page.screenshot({
				path: "screenshot/saucedemo/9.Checkout added product.png",
				fullScreen: true,
			});
			console.log("Screenshot saved in Screenshot folder");
			await page.click('[data-test="shopping-cart-badge"]');
			await page.click('[data-test="checkout"]');

			await page.fill("#first-name", faker.person.firstName());
			await page.fill("#last-name", faker.person.lastName());
			await page.fill("#postal-code", faker.location.zipCode());
			await page.screenshot({
				path: "screenshot/saucedemo/10.Person data.png",
				fullScreen: true,
			});
			console.log("Screenshot saved in Screenshot folder");
			await page.click("text=continue");
			await expect(page).toHaveURL(
				"https://www.saucedemo.com/checkout-step-two.html"
			);
			await expect(page.locator(".title")).toHaveText(
				"Checkout: Overview"
			);
			await page.click('[name="finish"]');
			await expect(
				page.locator('[data-test="complete-header"]')
			).toHaveText("Thank you for your order!");
			await page.screenshot({
				path: "screenshot/saucedemo/11.Finish order.png",
				fullScreen: true,
			});
			console.log("Screenshot saved in Screenshot folder");
		});
	});
});
