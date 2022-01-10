"use strict";
//console.log('test');
/**
 *
 * Function Basics
 *
 */
/*let greet = () =>{
    console.log('hello');
}*/
//greet is variable of type function. So we can do this
let greet;
greet = () => {
    console.log('Hello');
}; //this is allowed
const add = (a, b) => {
    console.log(a + b);
};
add(5, 10); //add(5,'10'); will be invalid
//If we want an optional parameter we have to use ? mark while defining parameters like
const subtract = (a, b, c) => {
    console.log(a - b);
    console.log(c); //will show undefined if no parameter passed
};
subtract(15, 10);
//If we use a default value like Line 23:const subtract = (a:number, b:number, c?: number|string = 22) =>
//so we need not use ? mark if we already have default paramater
//In Typescript, when we return values from functions to any variable, the variable is automatically assigned the 
//specific type from the returned value.
let minus = (a, b) => {
    return a + b;
};
let num = minus(10, 15); //if you hover mouse over num, you will see type number
const logdetails = (uid, item) => {
    console.log(`${item} has an uid of ${uid}`);
};
const greetings = (user) => {
    console.log(`${user.name} says hello!`);
};
//We might many similar funtion like the one below
/*const greetingsAgain = (user:{ name:string, uid:string|number }) => {
    console.log('${user.name} says hello!');
}*/
//So instead of writing again and again, so way around is to make type aliases and define those first
//We can write --> type StringorNum = string | number; at the top of the lines.
//Now we can write with minimal code.
const greetAgain = (user) => {
    console.log(`${user.name} has uid of ${user.uid}`);
};
/**
 *
 * Function Signatures
 *
 */
//Signatures mean what general structure the function has, what argument it takes in, what it returns
//let greet1:Function;
//Signatures look like this
//Example 1
let gree;
gree = (name, greeting) => {
    console.log(`${name} says "${greeting}"`);
};
//Example 2
let calc;
calc = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
//Example 3
let logging;
logging = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
