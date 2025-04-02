import{BrowserContext, Page} from '@playwright/test'
import{URLConstants} from '../constants/urlConstants';
import{wrapper} from "../utils/wrappermethods";
import path from 'path';

const authFile = path.join(__dirname, '../');

export class SalesforceLogin extends wrapper{
    static pageUrl = URLConstants.baseURL;

    constructor(page: Page, context: BrowserContext){
        super(page,context);      
    }

    public async salesforceLogin(userName:string,password:string){
        await this.type("#username",userName);
        await this.type("#password",password);
        await this.click("#Login");
        await this.validateElementVisibility(".slds-icon-waffle_container","App Launcher")
        await this.storeState("./logins/salesforce.json")
    }
}

