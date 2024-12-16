import { test, expect } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('https://tahazoabi.com/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Taha Zoabi')
})

test('header title', async ({ page }) => {
  await page.goto('https://tahazoabi.com/')

  // Expects page to have a heading visible
  await expect(
    page.getByRole('heading', {
      name: "I'm Taha Zoabi, Software Engineering Student."
    })
  ).toBeVisible()
})
