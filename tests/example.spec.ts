import {test, chromium, expect } from "@playwright/test";

// test("To launch the browser", async () => {
//     // to launch browser
//     const browser = await chromium.launch({headless:false});
//     // create a broswer context
//    const broswerContext = await browser.newContext();

//     // create a new page
//    const page = await broswerContext.newPage();

//    // load url
//    await page.goto("https://login.salesforce.com");    

//    await page.waitForTimeout(10000);

//    await page.locator("#username").fill("vive@testleaf.com");
//    await page.fill("#password","test@1234");
//    await page.locator("#Login").click();   

//    let icon = page.locator("#phHeaderLogoImag"); 
//    icon.getByTitle;
//    console.log(`verify ${icon}`);

//    await page.close();
//    await broswerContext.close();
// })

// test(`learning fixtures`, async ({page}) => {
//     await page.goto("https://login.salesforce.com");
//     await page.fill("#username","vive@testleaf.com");
//     await page.fill("#password","test@1234");
//     await page.click("#Login");   

// })

// test(`dropdown`, async ({page}) => {
    
//     await page.goto("http://www.leaftaps.com/opentaps");
//     await page.fill("#username","demoSalesManager");
//     await page.fill("#password","crmsfa")
//     await page.click(".decorativeSubmit");
//     await page.locator("text=CRM/SFA").click();
//     await page.click("text=Leads");
//     await page.click("text=Create Lead");
//     await page.fill("#createLeadForm_companyName", "company");
//     await page.waitForTimeout(1000);
//     await page.selectOption("#createLeadForm_dataSourceId", {value:'LEAD_DIRECTMAIL'});
//     const dropdownList = page.locator("#createLeadForm_dataSourceId option");
//     const dropdownCount = await dropdownList.count();
//     console.log(`${dropdownCount}`);

//     for( let i=0; i<dropdownCount ; i++){
//         console.log(await dropdownList.nth(i).innerText());
//     }    

//     await page.selectOption("#createLeadForm_generalCountryGeoId",{index:2});
//     await page.waitForTimeout(1000);

//     await page.selectOption("#createLeadForm_generalCountryGeoId",{label:"India"});
// })

test(`waits`, async ({page}) => {
    
    await page.goto("https://leafground.com/waits.xhtml");
    const msg = page.locator(".card").filter({hasText:"Wait for Visibility"});
    const buttonToClick = msg.getByRole("button").filter({hasText:"Click"});
    await buttonToClick.click();

    const hiddenButton = msg.getByRole("button").filter({hasText:"I am here"});
    await expect(hiddenButton).toBeVisible({timeout:1000});
    
    // locator chaining
    page.locator(".card").filter({hasText:"Wait for Visibility"}).getByRole("button").filter({hasText:"Click"}).click();
})

