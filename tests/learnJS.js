// run command - node .\tests\learnJS.js

const { rejects } = require("assert");
const { error } = require("console");
const { resolve } = require("path");

let test = ["regression", "sanity"];
test.push("smoke"); // add in last value
console.log(test);

test.pop();// remove last value
console.log(test);


test.shift(); // remove first element
console.log(test);
test.unshift("smoke", "test1", "test2"); // add in firts element
console.log(test);

let slice = test.slice(2,3); // retrun the value copr the portion 2 element to end before 3 rd element
console.log(slice);

let automationTools = [ "selenium", "playwright", "appium","cypress","webdrive.io"];
automationTools.splice(2,1, "AccelQ"); //remove appium and replace AccelQ
console.log(automationTools);
automationTools.splice(2,2, "RESTAssured","winnium"); ////remove cypress, AccelQ and replace 
console.log(automationTools);

console.log(automationTools.length);
automationTools[0]= "replaceValue";
automationTools[10]= "value1";
console.log(automationTools);

// heterogeneous - supported only for javascript
const mixedArray = [1,2,3,"chrome",'&aer1'];
console.log(mixedArray);

// join - join the array to string using "-"
let joinTypes = automationTools.join('-');
console.log(joinTypes);

let names = ["vi", "vasan", " test"];
let joinNames = names.join();
console.log(joinNames)

let arr1 =[1,9,5];
let arr2 = [4,8,10];
let newArr = arr1.concat(arr2);
console.log(newArr);
arr1.sort();
console.log(arr1);
arr1.reverse();
console.log(arr1);


// spread syntax
let a1=['a','b'];
let a2= [...a1,'e','f'];
console.log(a2);

/* -------------------------------------------------------------------------------------- 
Function - code modularity nd resuability
types: 
    1. function declaration - function with specified parameters
        function myFunction(userName){ // function body}
    2. function expressions - 
        const func = function(unsrName) {return `hi`}
    3. arrow functions - 
        const func = username => `hi, ${username}`;
    4. generator functions
    5. Asynchonous functions
        asyn function fetchData(url){}


Anonymous function - a function without a name
callback function - a function passed into another function as an argument        
    -----------------------------------------------------------------------------------------*/
    // function displayName(name){
    //     alert("hello" + name);
    // }
    // function processUser(callback){
    //     let name = prompt("please enter your name");
    //     callback(name);

    // }
    // // calling th efunction
    // processUser(displayName);
    /* ................................................... */
    // nested call back function
    // function fetchData("test.com", function(data1){
    //     console.log(data1); //first operation
    //     function("test.com/test", function(data2){
    //         console.log(data2) // second operation
    //     })
    // })   

    // instead of nexted, use promises - completed / failed
  /*  promises states:
        1. penfing
        2. fulfilled
        3. rejected

        resolve(value)
        reject(reason)
        .....................................................................*/
        // creating a promises
        function fetchUserData(userId){
            return new Promise((resolve, rejects)=>{
                setTimeout(()=>{
                    if(userId===1003){
                        resolve({id:1003, name:"RK"}); //fulfill the promise
                    }
                    else{
                        rejects(new Error('user is not found'));// reject the promise
                    }
                },3000);
            })
        }
        // consuming the promises
        fetchUserData(1003)
        .then(user =>{
            console.log('user found:', user.name);
        })
        .catch(error =>{
            console.error(error);
        })


