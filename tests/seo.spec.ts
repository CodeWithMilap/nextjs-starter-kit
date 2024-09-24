// e2e/seo.spec.ts
import { test, expect } from '@playwright/test';

test.describe('SEO Tests', () => {
  test('should have a title tag', async ({ page }) => {
    await page.goto('/');
    const title = await page.title();
    expect(title).toBeTruthy(); // Check if title is present
  });

  test('should have a meta description', async ({ page }) => {
    await page.goto('/');
    const description = await page.locator('meta[name="description"]').getAttribute('content');
    expect(description).toBeTruthy(); // Check if meta description is present
  });

  test('should have an h1 tag', async ({ page }) => {
    await page.goto('/');
    const h1 = await page.locator('h1').textContent();
    expect(h1).toBeTruthy(); // Check if h1 tag is present
  });
});
