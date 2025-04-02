import { SalesforceLogin } from "./SalesforceLoginPage";
import {Page, Locator, BrowserContext} from "@playwright/test";
import {credentialConstants} from "../constants/credentialConstants";
import {URLConstants} from "../constants/urlConstants"



export class SalesforceHomePage extends SalesforceLogin{

    static pageUrl = URLConstants.baseURL;

    public async login(){
        await this.loadApp(SalesforceHomePage.pageUrl);
        this.salesforceLogin(credentialConstants.USERNAME,credentialConstants.PASSWORD);
    }

    public async appLauncher(){
        await this.validateElementVisibility(".slds-icon-waffle","App Launcher");
        await this.click(".slds-icon-waffle");
    }

    public async viewAll(){
        await this.waitForSelector('//button[text()="View All"]');
        await this.click('//button[text()="View All"]');
    }

    public async searchApp(value:string){
        await this.type("one-app-launcher-modal input.slds-input",value);
        await this.click("//mark[text()='"+value+"']");
        await this.page.waitForTimeout(30000);
    }

}