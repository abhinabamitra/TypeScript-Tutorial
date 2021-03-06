"use strict";
//let character = 'abhi';
//console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
/*const circ = (diameter:number) =>{
    return diameter*Math.PI;
}*/
//Leads to cleaner code and type check
//arrays
let names = ['todd', 'robin', 'ted'];
names.push('toad');
//names.push(3) --> types has to be same
//We can have mixed arrays as well
let mixed = ['hey', 3, 'nicki', 6, 7]; ///Decalred as a number or string integer
mixed.push('ryu');
mixed.push(4);
//This is legal
//Objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
//Types of name and properties cannot be changed
ninja.age = 40; //legal expression but not ninja.age = 'ryu';
// cannot added properties in ninja once defined
//But we can overwrite 
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 50
}; //But here also we need not change the structure and properties
//**********/
//
//Explicit Types
//
//**********/
//In JS we can assign any type of a variable in the future but TS is scrict
let charac;
let age;
let isLoggedIn;
age = 30; //age = 'luigi' is an invalid statement
//Explicit types in Arrays
let ninjas = []; //Initialised with an empty array
ninjas = ['yoshi', 'shaun'];
//ninjas = [10,20] is invalid now
ninjas.push('abhi');
//Explicit in Union Types
let mixedArr = [];
mixedArr.push('hello');
mixedArr.push(30);
//mixedArr.push(false); is not a valid statement, we have to add boolean to pipe operator
let uid; //parenthsis in front of arrays
uid = 'hey';
//uid = false not valid
//Explicit types in Objects
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
//We can declare this as some kind of arrays because arrays are objects 
//ninjaOne = []; is valid
let ninjaTwo; //Very Explicit 
//Cannot add or subtract any other properties
//**********/
//
//Dynamic Types (any)
//
//**********/
let age1 = 25;
age1 = true; //This is valid
age1 = 'hello';
age1 = { name: 'abhi' }; //All are valid
//This is where TypeScript reverts back to Javascript because JS allows 'any' type of definition
//Can use any for objects and arrays as well.
let mixed1 = [];
mixed1.push('mario');
mixed1.push(5);
mixed1.push(false);
let obj1;
obj1 = { name: 'yosh', age: 24 };
obj1 = { name: 24, age: 'yosh' };
//...TO BE CONTINUED IN SECOND FILE.
