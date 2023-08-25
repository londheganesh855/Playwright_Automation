const { test, expect } = require('@playwright/test');

test('github user searach', async ({ browser}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  // ACT I
  await page.goto('https://gh-users-search.netlify.app/');
 // Assert I
  const title = page.locator("[class='sc-iBYQkv fzziLf']");
  await expect(title).toHaveText('Welcome');
  const searchBar = page.getByTestId('search-bar');
  await expect(searchBar).toBeVisible();
  // Act II
  await searchBar.type("Mahmudalhakim");
  page.locator("text=search").click();
  const profileInfo = page.locator('[class="sc-dkrFOg bHWDWn"]');
  // Assert II
  const profileName = profileInfo.locator('//h4');
  await expect(profileName).toContainText("Mahmud Al Hakim");
});
test('xyz bank', async ({ browser}) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/');
  await page.locator('[class="btn btn-primary btn-lg"]').nth(0).click();
  await page.locator("#userSelect").selectOption('Hermoine Granger');
  await page.locator('[class="btn btn-default"]').click();
  const customerName = page.locator('[class="fontBig ng-binding"]');
  await expect(customerName).toBeVisible();
  const blc=page.locator('[class="ng-binding"]').nth(1);
  const BeforeDepositeaccBlc=await blc.textContent();
  await expect(blc).toHaveText(BeforeDepositeaccBlc);
  await page.locator('[ng-click="deposit()"]').click();
  const deposite=page.locator('[ng-model="amount"]');
  await deposite.type("150");
  await page.locator('[class="btn btn-default"]').click();
  // successfull msg
  const successfullMsg=page.locator('[ng-show="message"]');
  await expect(successfullMsg).toBeVisible();
  
});