import {Page, Locator, BrowserContext, expect} from '@playwright/test';
import {SalesforceHomePage} from "./SalesForceHomePage";

export class SalesforceAccountPage extends SalesforceHomePage{

    public async clickOnNew(){
        await this.validateElementVisibility("div:text-is('New')", "New Button");
        await this.click("div:text-is('New')");
    }

    public async fillData( fieldName:string, fieldType:string, value:string){
        switch(fieldType){
            case "input":
                await this.type("//label[text()='"+fieldName +"']//following::input[1]", value);
                break;
            case "Dropdown":
                await this.click("//label[text()='"+fieldName+"']//following::button[1]");
                await this.click("//span[text()='" + value + "']");
                break;
             case "textArea" :
                 await this.type("//label[text()='"+fieldName+"']//following::textarea[1]", value); 
                 break;
            }            
        }

    public async saveButton() {
        await this.click("//button[text()='Save']");
    } 
    
    public async verifiAccountName(value:string) {
        await this.spinnerDisappear()
        await this.validateElementVisibility("records-entity-label","Account");
        const accountName = await this.getInnerText(".slds-page-header__title>lightning-formatted-text");
        expect(accountName).toBe(value);     
    }   
  }