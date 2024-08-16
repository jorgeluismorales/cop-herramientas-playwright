import { expect } from '@playwright/test';

exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.locator('input[id = "login-button"]');
    }

    async navigateTo(url) {
        await this.page.goto(url);
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async validateLogin() {
        await expect(this.page).toHaveURL(/.*inventory/);
    }
}