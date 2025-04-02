/*
Typescript
 superset of javascript
 adds static typing
 TSC - typescript compiler
    file.ts -> TSC --> file.js
*/

import { log } from "node:console";

let broswerName = "chrome";
broswerName = "safari";
console.log(typeof broswerName);

// tsc .\tests\LearnTypeScript.ts - cannot compile ts file directly and convert to js first
// node .\tests\LearnTypeScript.js

let testTypes:string[] = ["smoke", "regression", "sanity"];
//testTypes.push(123); - error will show 
console.log(testTypes);

// any - use api request - if not sure what type of response
let testTypes1:any = ["smoke", "regression", "sanity", 123, 90.24];
// void
function typeMessage():void{
    //return `hello`; -not allowed
}

/** varibales - let and const
 * data type - string, boolean, number, Array, any, void
 */
let firstName: string = "vive"; // explicit inference

/** type Inference
 * 1. Implicit inference
 *  e. x-> let companyName = "veeva"
 * 2. Explicit Inference
 *   e.x -> let firstName: string = "vive"; 
 */

let companyName = "veeva";

let isBrowserClosed:string = "no";

function add(x:number,y:number): number{
    return x + y;
}
console.log(add(2,3));

function add1(x,y){
    return x + y;
}
console.log(add1("test",3));

/** Annotation - explicity specify the type
 *  union type - |
 * type Aliases
 * 
 * basic types - Array , void, any, null, undefined
 * 
 * Array defining->
 * 1. Literal - [] -> let numbers: number[] = [1,2,3];
 * 2. constructor <> -> let names: Array<string> =["name2", "nam4"];
 */
// union type
let userProfile: number|string|boolean= 28;
userProfile = "test";
console.log(userProfile)

const user: number|string = 20;
//user = "name"; - const - consider first number declaration, const can't be change the value

/** type Aliases
type AliasName = type 
type StringAlias = string
type StringOrNumber = string|number;
*/
type StringOrNumber = string|number;
let userProf:StringOrNumber = "Roopa";
userProf = 28;
console.log(userProf);

type supportedBrowsers = "Chrome"|"Firefox";
function invokeBrowser(broswer:supportedBrowsers):void{
    if(broswer==="Chrome"){
        console.log("launch chrome browser");        
    }
    else{
        console.log("launch firefox browser");
    }
}
invokeBrowser("Chrome");

/**
 * Intersection type - & --> combing mu;tiple type
 * Object Literal --> key,value -- call as properties
 * let objName:{key1:type1;key2:type2;...}={
 * key1:value1,
 * key2:value2
 * }
 */

let userData:{
    name:string;
    age:number;
    email:string;
    isActive:boolean
} ={name:"sai",
    age:30,
    email:"sai@gmail.com",
    isActive:true
};

console.log(userData.name); //dot notation
console.log(userData["name"]); //bracket notation



type Employee = {id:number, empName:string};
type department = {department:string};
//Intersection type
type Team = Employee & department
let emp1: Team ={id:1003,empName:"vive",department:"QA"};
console.log(emp1);

/**................................................................................. */
type supportedBrowser = "chrome" | "safari";
type broswerVersion = "121"|"123";
type browserProfiles ={
    browserName:supportedBrowser;
    version:broswerVersion;
}

function callBrowser(broswer:browserProfiles):void{
    if(broswer.browserName==="chrome" && broswer.version==="121"){
        console.log("chrome browser");        
    }
}
const chromeBrowser:browserProfiles={
    browserName:"chrome",
    version:"121"
}
const safartBrowser:browserProfiles={
    browserName:"safari",
    version:"123"
}

callBrowser(chromeBrowser);
/***----------------Union type -Real scenario----------------------------- */
import {chromium,Browser,Page, BrowserContext} from'@playwright/test'

async function performAction(url:string,action:'screenshot'|'title'):Promise<string|void> {
    const browser: Browser = await chromium.launch();
    const context:BrowserContext = await browser.newContext();
    const page:Page = await context.newPage();

    await page.goto(url);
    if(action==='screenshot'){
        const screenshotPath = './test-results/screenshot.png';
        await page.screenshot({path:screenshotPath});
        await browser.close();
        return `screenshot saved as ${screenshotPath}`;
    }    
    else if(action==='title'){
        const title = await page.title();
        await browser.close();
        return ` title of the page is : ${title}`
    }

    await browser.close();
}

async function runTest() {
    const screenshotResult = await performAction("https://login.salesforce.com", "screenshot");
    const title = await performAction("https://login.salesforce.com", "title");
    console.log(screenshotResult);
    console.log(title);
    
    
}

runTest();

/**.................  type- assertion..............................................................-- 
 * 1. Angle brackets
 * 2. as
 * 
*/
let response:any = "record created successfully";
let myResponse: number = (<string>response).length;
console.log(myResponse);

let response1:any = 123;
let myResponse1 = (<number>response1);
console.log(typeof myResponse1);

let statusCode: any = "success";
let statusLength:number = (statusCode as string).length;
console.log(statusLength);;

/**    ------------Enum -------------------------------------------------------------
 * - set of named constants
 * 1. Numberic Enums
 */
enum testResults{
    pass = 1,// not definied - 0
    fail,
    Pending,
    Warning,
    Skip,
    Error
}
function logTestResults(testName:string, results: testResults){
    console.log(`your test ${testName} and test result: ${results}`);    
}
logTestResults("LoginTest",testResults.pass);
logTestResults("HomeTest",testResults.Pending);

enum BrowserType{
    Chrome = "chrome",
    Firefox = "firefox"
}

function launchBrowser(browerType:BrowserType){
    console.log(`launching ${browerType} browser`);    
}
launchBrowser(BrowserType.Chrome);

//Heterogeneous enum - mix of types
enum browserStatus{
    Opened =1,
    Closed = "Closed",
    Crashed = 0,
    Unknown = "Unknown"
}

function status(browserstatus:browserStatus){
    console.log(`${browserstatus}`);    
}
status(browserStatus.Opened);
status(browserStatus.Unknown);

/**---------------parameter-types-----------------
 * 1.Optional parameters - first define required fields then optional fields
 * 2.default parameters
 * 
 */
function userReg(fName:string, lName:string,age:Number,sName?:string,height ?:number){
    console.log(` sign up : ${fName}, ${lName}, ${sName}, ${age}, ${height}`);    
}

userReg("vive","vasan",30,"sName",155);

function profileContent(firstName:string, ahe:number, dob?: string, userProfile:string = "Avaiable"){
    console.log(`${firstName}, ${ahe}, ${userProfile}`);    
}
profileContent("vive", 20);