import { test as baseTest, Page, chromium, BrowserContext} from '@playwright/test';

import {credentialConstants} from "../constants/credentialConstants";
import {SalesforceLogin} from "../pages/SalesforceLoginPage";
import{SalesforceHomePage} from "../pages/SalesForceHomePage";
import {SalesforceAccountPage} from "../pages/SalesforceAccountPage";
import {aiFixture, type AiFixture} from '@zerostep/playwright';


type SalesforceFixtures = {
    SalesforceLogin : SalesforceLogin;
    SalesforceHomePage : SalesforceHomePage;
    SalesforceAccountPage : SalesforceAccountPage;
};

export const test = baseTest.extend<SalesforceFixtures & AiFixture>({
    SalesforceLogin: async ({page, context}, use) =>{
        const sfLogin = new SalesforceLogin(page, context);
        await sfLogin.salesforceLogin(credentialConstants.USERNAME,credentialConstants.PASSWORD);
        console.log(sfLogin);
        await use(sfLogin);
    },
    SalesforceHomePage: async({page, context}, use)=>{
        const sfHome = new SalesforceHomePage(page,context);
        await use(sfHome);
    },
    SalesforceAccountPage: async({page, context}, use)=>{
        const sfAccount = new SalesforceAccountPage(page,context);
        await use(sfAccount);
    },
    ...aiFixture(baseTest)
    })