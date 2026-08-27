import { expect, test } from '@playwright/test';

const routes = [
  ['accueil', '/'],
  ['cours', '/cours-krav-maga-limeil-brevannes/'],
  ['instructeurs', '/instructeurs/'],
  ['horaires-tarifs', '/horaires-tarifs/'],
  ['inscription-essai', '/inscription-essai/'],
  ['lieu', '/lieu/'],
  ['faq', '/faq/'],
  ['actualites', '/actualites/'],
  ['mentions-legales', '/mentions-legales/'],
  ['confidentialite', '/confidentialite/'],
] as const;

const viewports = [
  ['desktop', { width: 1440, height: 1000 }],
  ['mobile', { width: 390, height: 844 }],
] as const;

for (const [viewportName, viewport] of viewports) {
  test.describe(`${viewportName} layout`, () => {
    test.use({ viewport });

    for (const [routeName, path] of routes) {
      test(`${routeName} matches the approved layout`, async ({ page }) => {
        await page.goto(path, { waitUntil: 'networkidle' });
        await expect(page.locator('main')).toBeVisible();
        await page.evaluate(() => document.fonts.ready);
        await page.addStyleTag({
          content: '*, *::before, *::after { animation: none !important; transition: none !important; }',
        });

        await expect(page).toHaveScreenshot(`${routeName}-${viewportName}.png`, {
          fullPage: true,
        });
      });
    }
  });
}

test('footer logo expanded state remains correctly positioned', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Agrandir ou réduire le logo KMIS' }).click();
  await expect(page.locator('.footer-logo-frame')).toHaveClass(/is-expanded/);
  await expect(page).toHaveScreenshot('accueil-footer-logo-expanded.png', { fullPage: true });
});
