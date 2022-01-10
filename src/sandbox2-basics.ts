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
let greet: Function;

greet = () =>{
    console.log('Hello');
}                                  //this is allowed

const add = (a:number, b:number) => {
    console.log(a+b);
}
add(5,10);            //add(5,'10'); will be invalid

//If we want an optional parameter we have to use ? mark while defining parameters like
const subtract = (a:number, b:number, c?: number|string) =>{
    console.log(a-b);
    console.log(c);                //will show undefined if no parameter passed
}
subtract(15,10);

//If we use a default value like Line 23:const subtract = (a:number, b:number, c?: number|string = 22) =>
//so we need not use ? mark if we already have default paramater

//In Typescript, when we return values from functions to any variable, the variable is automatically assigned the 
//specific type from the returned value.
let minus = (a:number, b:number) =>{
    return a+b;
}
let num = minus(10,15); //if you hover mouse over num, you will see type number
//we cannot do num = 'some string';
//Although we can explicitly mention the return type of a function, but typescript automatically does that so not needed
//If needed, const minus = (a:number, b:number):number =>{...}
//If function does not return anything, it returns void

/**
 * 
 * Type Aliases
 * 
 */
type StringOrNum = string|number;
type ObjWithName = {name:string, uid: StringOrNum};

const logdetails = (uid: StringOrNum, item:string) => {
    console.log(`${item} has an uid of ${uid}`); 
}
const greetings = (user:ObjWithName) => {
    console.log(`${user.name} says hello!`);
}
//We might many similar funtion like the one below
/*const greetingsAgain = (user:{ name:string, uid:string|number }) => {
    console.log('${user.name} says hello!');
}*/

//So instead of writing again and again, so way around is to make type aliases and define those first
//We can write --> type StringorNum = string | number; at the top of the lines.
//Now we can write with minimal code.
const greetAgain = (user:ObjWithName) => {
    console.log(`${user.name} has uid of ${user.uid}`);
} 

/**
 * 
 * Function Signatures
 * 
 */
//Signatures mean what general structure the function has, what argument it takes in, what it returns
//let greet1:Function;

//Signatures look like this
//Example 1
let gree: (a:string, b:string) =>void;
gree = (name:string, greeting:string) => {
    console.log(`${name} says "${greeting}"`);
}

//Example 2
let calc: (a:number, b:number, c:string) => number;

calc = (num1:number, num2:number, action:string) =>{
    if(action === 'add'){
        return num1+num2;
    }
    else{
        return num1-num2;
    }
}

//Example 3
let logging: (obj:{name:string,age:number}) =>void;
type person = {name:string, age:number};

logging = (ninja:person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}
