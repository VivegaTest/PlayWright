"use strict";
/*
Typescript
 superset of javascript
 adds static typing
 TSC - typescript compiler
    file.ts -> TSC --> file.js
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var broswerName = "chrome";
broswerName = "safari";
console.log(typeof broswerName);
// tsc .\tests\LearnTypeScript.ts - cannot compile ts file directly and convert to js first
// node .\tests\LearnTypeScript.js
var testTypes = ["smoke", "regression", "sanity"];
//testTypes.push(123); - error will show 
console.log(testTypes);
// any - use api request - if not sure what type of response
var testTypes1 = ["smoke", "regression", "sanity", 123, 90.24];
// void
function typeMessage() {
    //return `hello`; -not allowed
}
/** varibales - let and const
 * data type - string, boolean, number, Array, any, void
 */
var firstName = "vive"; // explicit inference
/** type Inference
 * 1. Implicit inference
 *  e. x-> let companyName = "veeva"
 * 2. Explicit Inference
 *   e.x -> let firstName: string = "vive";
 */
var companyName = "veeva";
var isBrowserClosed = "no";
function add(x, y) {
    return x + y;
}
console.log(add(2, 3));
function add1(x, y) {
    return x + y;
}
console.log(add1("test", 3));
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
var userProfile = 28;
userProfile = "test";
console.log(userProfile);
var user = 20;
var userProf = "Roopa";
userProf = 28;
console.log(userProf);
function invokeBrowser(broswer) {
    if (broswer === "Chrome") {
        console.log("launch chrome browser");
    }
    else {
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
var userData = { name: "sai",
    age: 30,
    email: "sai@gmail.com",
    isActive: true
};
console.log(userData.name); //dot notation
console.log(userData["name"]); //bracket notation
var emp1 = { id: 1003, empName: "vive", department: "QA" };
console.log(emp1);
function callBrowser(broswer) {
    if (broswer.browserName === "chrome" && broswer.version === "121") {
        console.log("chrome browser");
    }
}
var chromeBrowser = {
    browserName: "chrome",
    version: "121"
};
var safartBrowser = {
    browserName: "safari",
    version: "123"
};
callBrowser(chromeBrowser);
/***----------------Union type -Real scenario----------------------------- */
var test_1 = require("@playwright/test");
function performAction(url, action) {
    return __awaiter(this, void 0, void 0, function () {
        var browser, context, page, screenshotPath, title;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, test_1.chromium.launch()];
                case 1:
                    browser = _a.sent();
                    return [4 /*yield*/, browser.newContext()];
                case 2:
                    context = _a.sent();
                    return [4 /*yield*/, context.newPage()];
                case 3:
                    page = _a.sent();
                    return [4 /*yield*/, page.goto(url)];
                case 4:
                    _a.sent();
                    if (!(action === 'screenshot')) return [3 /*break*/, 7];
                    screenshotPath = './test-results/screenshot.png';
                    return [4 /*yield*/, page.screenshot({ path: screenshotPath })];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, browser.close()];
                case 6:
                    _a.sent();
                    return [2 /*return*/, "screenshot saved as ".concat(screenshotPath)];
                case 7:
                    if (!(action === 'title')) return [3 /*break*/, 10];
                    return [4 /*yield*/, page.title()];
                case 8:
                    title = _a.sent();
                    return [4 /*yield*/, browser.close()];
                case 9:
                    _a.sent();
                    return [2 /*return*/, " title of the page is : ".concat(title)];
                case 10: return [4 /*yield*/, browser.close()];
                case 11:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function runTest() {
    return __awaiter(this, void 0, void 0, function () {
        var screenshotResult, title;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, performAction("https://login.salesforce.com", "screenshot")];
                case 1:
                    screenshotResult = _a.sent();
                    return [4 /*yield*/, performAction("https://login.salesforce.com", "title")];
                case 2:
                    title = _a.sent();
                    console.log(screenshotResult);
                    console.log(title);
                    return [2 /*return*/];
            }
        });
    });
}
runTest();
/**.................  type- assertion..............................................................--
 * 1. Angle brackets
 * 2. as
 *
*/
var response = "record created successfully";
var myResponse = response.length;
console.log(myResponse);
var response1 = 123;
var myResponse1 = response1;
console.log(typeof myResponse1);
var statusCode = "success";
var statusLength = statusCode.length;
console.log(statusLength);
;
/**    ------------Enum -------------------------------------------------------------
 * - set of named constants
 * 1. Numberic Enums
 */
var testResults;
(function (testResults) {
    testResults[testResults["pass"] = 1] = "pass";
    testResults[testResults["fail"] = 2] = "fail";
    testResults[testResults["Pending"] = 3] = "Pending";
    testResults[testResults["Warning"] = 4] = "Warning";
    testResults[testResults["Skip"] = 5] = "Skip";
    testResults[testResults["Error"] = 6] = "Error";
})(testResults || (testResults = {}));
function logTestResults(testName, results) {
    console.log("your test ".concat(testName, " and test result: ").concat(results));
}
logTestResults("LoginTest", testResults.pass);
logTestResults("HomeTest", testResults.Pending);
var BrowserType;
(function (BrowserType) {
    BrowserType["Chrome"] = "chrome";
    BrowserType["Firefox"] = "firefox";
})(BrowserType || (BrowserType = {}));
function launchBrowser(browerType) {
    console.log("launching ".concat(browerType, " browser"));
}
launchBrowser(BrowserType.Chrome);
//Heterogeneous enum - mix of types
var browserStatus;
(function (browserStatus) {
    browserStatus[browserStatus["Opened"] = 1] = "Opened";
    browserStatus["Closed"] = "Closed";
    browserStatus[browserStatus["Crashed"] = 0] = "Crashed";
    browserStatus["Unknown"] = "Unknown";
})(browserStatus || (browserStatus = {}));
function status(browserstatus) {
    console.log("".concat(browserstatus));
}
status(browserStatus.Opened);
status(browserStatus.Unknown);
/**---------------parameter-types-----------------
 * 1.Optional parameters - first define required fields then optional fields
 * 2.default parameters
 *
 */
function userReg(fName, lName, age, sName, height) {
    console.log(" sign up : ".concat(fName, ", ").concat(lName, ", ").concat(sName, ", ").concat(age, ", ").concat(height));
}
userReg("vive", "vasan", 30, "sName", 155);
function profileContent(firstName, ahe, dob, userProfile) {
    if (userProfile === void 0) { userProfile = "Avaiable"; }
    console.log("".concat(firstName, ", ").concat(ahe, ", ").concat(userProfile));
}
profileContent("vive", 20);
