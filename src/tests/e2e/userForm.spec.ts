import { test, expect } from '@playwright/test';

test.describe('User Form', () =>
{
    test.beforeEach(async ({ page }) =>
    {
        await page.goto('/');
    });

    test('renders form correctly', async ({ page }) =>
    {
        await expect(page.getByLabel(/first name/i)).toBeVisible();
        await expect(page.getByRole('button', { name: /submit/i })).toBeVisible();
    });

    test('shows validation errors', async ({ page }) =>
    {
        await page.getByRole('button', { name: /submit/i }).click();
        await expect(page.getByText(/first name must be at least 2 characters/i)).toBeVisible();
    });

    test('submits form with valid data', async ({ page }) =>
    {
        await page.getByLabel(/first name/i).fill('John');
        await page.getByLabel(/last name/i).fill('Doe');
        await page.getByLabel(/email/i).fill('john@example.com');
        await page.getByLabel(/age/i).fill('30');

        await page.getByRole('button', { name: /submit/i }).click();

        // Add assertions for successful submission
        await expect(page.getByText(/user data submitted/i)).toBeVisible();
    });
});