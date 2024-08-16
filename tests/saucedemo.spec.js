import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ProductsPage } from '../pages/productsPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { allure } from "allure-playwright";
import { attachScreenshot } from '../utils/screenshot-setup'

test('Saucedemo', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const checkoutPage = new CheckoutPage(page);

    await allure.step('Navegar a saucedemo', async () => {
        await loginPage.navigateTo('/');
        await attachScreenshot(page, 'screenshot1');
    })

    await allure.step('Ingresar usuario y contraseña y validar login', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.validateLogin();
        await attachScreenshot(page, 'screenshot2');
    })

    await allure.step('Agregar al carrito producto al azar', async () => {
        await productsPage.addProductToCart();
        await attachScreenshot(page, 'screenshot3');
    })

    await allure.step('Navegar al carrito', async () => {
        await productsPage.goToCart();
        await attachScreenshot(page, 'screenshot4');
    })

    await allure.step('Hacer click en Checkout', async () => {
        await checkoutPage.checkOut();
        await attachScreenshot(page, 'screenshot5');
    })

    await allure.step('Completar formulario', async () => {
        await checkoutPage.fillInfomationForm();
        await attachScreenshot(page, 'screenshot6');
    })

    await allure.step('Hacer click en Finish', async () => {
        await checkoutPage.finishCheckOut();
        await attachScreenshot(page, 'screenshot7');
    })

    await allure.step('Validar mensaje de compra exitosa', async () => {
        await checkoutPage.validateSuccessMessage();
        await attachScreenshot(page, 'screenshot8');
    })

    await allure.step('Cerrar navegador', () => {
        page.close();
    });
})