import { test, expect } from '@playwright/test'

/// AAA - Arrange, Act, Assert
///page = aba do navegador


test('deve consultar um pedido aprovado', async ({ page }) => {
    //Arrange
    await page.goto('http://localhost:5173/')
    await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint')

    await page.getByRole('link', { name: 'Consultar Pedido' }).click()
    await expect(page.getByRole('heading')).toContainText('Consultar Pedido')


    //Act
    await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-TZ231Q')
    await page.getByRole('button', { name: 'Buscar Pedido' }).click();


    //Assert
    //await expect(page.getByTestId('order-result-id')).toBeVisible({ timeout: 30000 }) //timeout explicito para esperar o elemento aparecer
    //await expect(page.getByTestId('order-result-id')).toContainText('VLO-TZ231Q')

    //await expect(page.getByTestId('order-result-status')).toBeVisible()
    //await expect(page.getByTestId('order-result-status')).toContainText('APROVADO')

    await expect(page.getByTestId('order-result-VLO-TZ231Q')).toBeVisible({ timeout: 10000 });
    await expect(page.getByTestId('order-result-VLO-TZ231Q')).toContainText('VLO-TZ231Q');
    await expect(page.getByTestId('order-result-VLO-TZ231Q').getByText('Pedido', { exact: true })).toBeVisible();
    await expect(page.getByTestId('order-result-VLO-TZ231Q')).toContainText('APROVADO');

})