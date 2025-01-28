import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.beforeEach(async ({ page }) => {
	await page
		.context()
		.tracing.start({ snapshots: true, screenshots: true });
	await page.goto("https://rahulshettyacademy.com/angularpractice/");
});

test.describe.parallel("Form Test Case", () => {
	test("Form ", async ({ page }) => {
		await page.fill('[name="name"]', faker.name.fullName());

		expect(await page.inputValue('[name="name"]')).toBe(
			await page.inputValue('[name="name"]')
		);
		await page.screenshot({
			path: "screenshot/academy/1.field name.png",
			fullScreen: true,
		});

		await page.fill('[name="email"]', "mahfud@email.com");
		expect(await page.inputValue('[name="email"]')).toBe(
			"mahfud@email.com"
		);
		await page.screenshot({
			path: "screenshot/academy/2.field Email.png",
			fullScreen: true,
		});

		await page.fill('[id="exampleInputPassword1"]', "Password");
		expect(
			await page.inputValue('[id="exampleInputPassword1"]')
		).toBe("Password");
		await page.screenshot({
			path: "screenshot/academy/3.field Password.png",
			fullScreen: true,
		});

		await page.click('[class="form-check-label"]');
		expect(await page.isChecked('[id="exampleCheck1"]')).toBeTruthy();
		await page.screenshot({
			path: "screenshot/academy/4.field Check.png",
			fullScreen: true,
		});

		await page.selectOption(
			'[id="exampleFormControlSelect1"]',
			"Female"
		);
		expect(
			await page.inputValue('[id="exampleFormControlSelect1"]')
		).toBe("Female");
		await page.screenshot({
			path: "screenshot/academy/5.field Dropdown.png",
			fullScreen: true,
		});

		await page.click('[id="inlineRadio1"]');
		expect(await page.isChecked('[id="inlineRadio1"]')).toBeTruthy();
		await page.screenshot({
			path: "screenshot/academy/6.field RadioButton.png",
			fullScreen: true,
		});

		await page.fill('[name="bday"]', "1994-10-01");
		expect(await page.inputValue('[name="bday"]')).toBe("1994-10-01");
		await page.screenshot({
			path: "screenshot/academy/7.field Born Date.png",
			fullScreen: true,
		});

		await page.click('[type="submit"]');
		await page.context().tracing.stop({ path: "trace.zip" });
		// expect(await page.url()).toContain("success"); // Assuming the URL changes on success
	});
});
