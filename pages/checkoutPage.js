import { expect } from '@playwright/test';

exports.CheckoutPage = class CheckoutPage {


    constructor(page) {
        this.checkOutBtn = page.getByText('Checkout');
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.zipCode = page.getByPlaceholder('Zip/Postal Code');
        this.continueBtn = page.getByText('Continue');
        this.finishBtn = page.getByText('Finish');
        this.completeOrderMessage = page.locator('.complete-header');
    }

    async checkOut() {
        await this.checkOutBtn.click();
    }

    async fillInfomationForm() {
        await this.firstName.fill('asdad');
        await this.lastName.fill('asdasd');
        await this.zipCode.fill('123');
        await this.continueBtn.click();
    }

    async finishCheckOut() {
        await this.finishBtn.click();
    }

    async validateSuccessMessage() {
        await expect(this.completeOrderMessage).toBeVisible();
    }
}