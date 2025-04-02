import {BrowserContext, Page} from "@playwright/test";
import {test } from '../customFixtures/salesforceFixture';
import { readDataFromCSV } from "../utils/csvUtils";
const csvFilePath = './data/accounts.csv';


test.use({storageState:"logins/salesforce.json"});


test('Creating an Account ', async ({SalesforceHomePage, SalesforceAccountPage}) => {
    const data = await readDataFromCSV(csvFilePath);
    test.info().annotations.push(
        {type: 'Author', description:'Vivega S'},
        {type: 'Test Case', description: 'Creating an account using csv data'}
    );

    for( const row of data){
        const {Rating, Type, BillingStreet} = row;
    
    await SalesforceHomePage.login();
    await SalesforceHomePage.appLauncher();
    await SalesforceHomePage.viewAll();
    await SalesforceHomePage.searchApp("Accounts");
    await SalesforceAccountPage.clickOnNew();
    await SalesforceAccountPage.fillData("Account Name","input","acc3");  
    await SalesforceAccountPage.fillData("Rating","Dropdown",Rating);  
    await SalesforceAccountPage.fillData("Account Number","input","001");  
    await SalesforceAccountPage.fillData("Type","Dropdown",Type);  
    await SalesforceAccountPage.fillData("Billing Street","textArea",BillingStreet);  
    await SalesforceAccountPage.saveButton();
    await SalesforceAccountPage.verifiAccountName("acc3");
    }
});