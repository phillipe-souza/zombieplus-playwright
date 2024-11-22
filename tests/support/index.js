const { test: base, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { LandingPage } = require('../pages/LandingPage');
const { MoviesPage } = require('../pages/MoviesPage');
const { Toast } = require('../pages/Components');

const test = base.extend({
	page: async ({ page }, use) => {
		const context = page;

		context['login'] = new LoginPage(page);
		context['landing'] = new LandingPage(page);
		context['movies'] = new MoviesPage(page);
		context['toast'] = new Toast(page);

		await use(context);
	}
});

export { test, expect };
