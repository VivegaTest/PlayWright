import{Page, BrowserContext, test, expect} from '@playwright/test';
import * as path  from 'path'


export abstract class wrapper {
    readonly page: Page;
    readonly context: BrowserContext;

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;        
    }

    async type(locator:string, testData:string){
        await this.page.locator(locator).fill(testData);
    }

    async typeAndEnter(locator:string, testData:string){
        await this.page.locator(locator).fill(testData);
        await this.page.keyboard.press('Enter');
    }

    async click(locator:string){
        await this.page.locator(locator).click({timeout:10000});
    }

    async loadApp(url:string){
        try{
            await test.step(`The url ${url} loaded`, async () => {
                await this.page.goto(url, {timeout:30000});
            })
        } catch(error){
            console.log('Error loading the page:', error);            
        }
    }

    async getInnerText(locator:string): Promise<string> {
            return await this.page.locator(locator).innerText();
    }

    async getText(locator:string): Promise<string> {
        return await this.page.locator(locator).inputValue();
    }
  
    async getTitle() {
        try {
            const pageTitle = await this.page.title()
            return pageTitle
        } catch (error) {
            if (error instanceof Error && error.message.includes('Execution context was destroyed')) {
                console.error('Error: Execution context was destroyed. Retrying...');
                await this.page.waitForLoadState('load');
                return await this.page.title();
            } else {
                console.error('An unexpected error occurred:', error);
                throw error;
            }
        }
    }

    async waitForSelector(locator:string){
        await this.page.waitForSelector(locator);
    }

    async validateElementVisibility(locator: any, elementName: string) {
        const element = this.page.locator(locator);
        await this.page.waitForLoadState('load')
        await this.page.waitForSelector(locator, { state: 'visible', timeout: 20000 });
        if (await element.isVisible({ timeout: 20000 })) {
            console.log(`${elementName} is visible as expected.`);
        } else {
            console.error(`${elementName} is not visible.`);
        }
    }

    async storeState(path: string) {
        await this.page.context().storageState({ path: path })
    }

    async spinnerDisappear() {
      //  this.maxWait(3000)
        const spinner = this.page.locator("//div[@class='slds-spinner_container slds-grid']");
        await expect(spinner).toHaveCount(0);
        console.log("expected element is disabled");
    }

    async maxWait(value: number) {
        await this.page.waitForTimeout(value)
    }
}
