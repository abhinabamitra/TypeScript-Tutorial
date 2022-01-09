console.log('test');
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


