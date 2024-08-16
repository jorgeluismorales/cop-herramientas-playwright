exports.ProductsPage = class ProductsPage {

    constructor(page) {
        this.addToCartBtn = page.locator(`(//button[text() = 'Add to cart'])[${Math.floor(Math.random() * 6) + 1}]`);
        this.shoppingCartIcon = page.locator('a[class = "shopping_cart_link"]');
    }

    async addProductToCart() {
        await this.addToCartBtn.click();
    }

    async goToCart() {
        await this.shoppingCartIcon.click();
    }
}