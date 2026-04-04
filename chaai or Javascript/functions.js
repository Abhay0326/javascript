/********Immediately Invoked Function Expression (IIFE)*****/
//The IIFE acts as a self-contained bubble for that specific logic.
//It is used to invoke function immediately at first occurance.
//It also use to seperate the scope of function from interferance of global pollutions.
//Syntax: (<--function_definition-->)()
(function db(){
    //Named IIFE
    console.log("DB CONNECTED"); 
})();

//NOTE: to use IIFE in midway the previous statement should end with a "semicolon", as js unable to add it here by own.
(() =>{
    console.log("CONNECTED TO SERVER");
})();

//IIFE with argument and parameter.
((name) =>{
    console.log(`Hello ${name}`)
})("Abhay");

/*************************************************************/
function sum(num1,num2){
    if(!num1 || !num2) return "Invalid Input"; //Note the use of !num1 .
    return num1+num2
}

console.log(sum()) //if no argument given then it will be undefined by default, and it treated as "FALSE". 
console.log(sum(23,34))

/**Rest Operator(...) for n-inputs in array */
function temp(...args){
    console.log(args)
}
temp(23,45,"sdf",[2,4,5])

/**********IMPORTANT (hoisting intro)***********/

console.log(addOne(5)) //NOTE: we can call simple function before it's declaration.

function addOne(num){
    return num+1
}

//console.log(addTwo(5)) //Error: We cannot call a statement function before it's declaration.

const addTwo= function(num){
    return num+2
}
console.log(addTwo(5))

/*************** Arrow Function and this-keyword ******************/
//We use "this" keyword to access the varables at the current scope of the function.
const user={
    username:"Abhay",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcone to the course. `);
        console.log(this); //will print the Object in the scope of "this" keyword.
    }
}

user.welcomeMessage();
user.username="Himanshu"
user.welcomeMessage();

console.log(this); //Globally this keyword refering to a empty Object in node.
/**NOTE: But the global "this" keyword will refer to the "window" Object in the "Browser Environment" to access window features.*/

//"this" keyword inside a function
function greet(){
    let username="Abhay";
    console.log(this); //inside a function "this" keyword is refering to some in-built Object in node environment and "window" Object in the "Browser Environment".
    console.log(this.username); //return "undefined", as this can only be used inside a Object. 
}
greet()

/*-----Arrow Function-----*/
const greet2= () =>{
    let name="Abhay";
    console.log(this); //NOTE: inside arrow function "this" refer to a empty Object in "Node Environment" and "window" Object in the "Browser Environment".
    console.log(this.username) //return "undefined", as this can only be used inside a Object. 
}

greet2()

//Explicite return function(using {} and return keyword)
const sub= (num1,num2) =>{
    return num1-num2
}
console.log(sub(8,5))

//Impicite return function(using parenthesis)
const sub2= (num1,num2) => ( num1 - num2); //this will diectly return whatever inside the parentesis.
const obj=() => ({name:"Abhay",id:"1234"}); //we have to use () to enclose the Object, to return it. 

console.log(sub2(4,7))
console.log(obj());




