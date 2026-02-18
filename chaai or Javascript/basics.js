//variables 
const value="fixedValue"; 
let num=32; //let know about scope of variables.
place="Delhi"; //can directly create a variable.
//var is not recomended to use because it don't know about scope of variables. 
var variable="Not recomended to use var."

//-----------------------------------------------//
//Primitive data types. They are stored in stack memory.
let int=34 //number
let float=3.14  //number
let str="String" //string
let bigInt=348456982496034860294n // bigint

let none=null //object data-type

let bool=true //boolean
let notDefined=undefined //undefined 

//Symbol used to make a value unique from any variable even if they both have same value.
let id= Symbol("123")
let id2= Symbol("123")
console.log(id===id2)
console.log(typeof id) //symbol

let non; //when a variable is not initialized, it set to undefined by default.

//value+=1; //contant variable cannot be changed

console.table([int,float,str,none,bool,notDefined,non])
console.log(typeof bool)

//----------------------------------------------------//
//Refernce(non-primitive) data-types. They are stored in a Heap Memory and give refernce of it.

let lst=["value1","value2"] //Array ,typeof return object
let obj={
    name: "Abhay",
    age: 21,
    course:"BCA"
}  //object, typeof() return object

console.log(obj.name) //Access values of an object with dot operator.
console.log(typeof lst)

let fun= function(n){
    let sum=0;
    for (let i=1;i<=n;i++) sum+=i;
    return sum;
} //Function , typeof return function

console.log("Sum of 10 terms:",fun(10))
console.log(typeof(fun))

//Anomalous behaviour of string. Implicite type casting.
console.log("2"+4) //string addition
console.log(4+"2") //string addition

console.log("4"+2+2) //string addition
console.log(2+2+"4") //first mathematical addition then string addition.

console.log("4"==4) //string converted to number then compared.
console.log("4">3)
console.log("4">=4)

//------------------------------------------------------//
//Strings

const name="Abhay" //data type: String
const repo=4
let course=String("BCA"); //this will create a primitive String not an object.
const string=new String(`Javascript ${repo}`) //making a sring-Object using String() function with new keyword.

console.log(name,repo+" repos") //concatination

//String Interpolation backTick/graveAccent(``)
console.log(`My name is ${name}. I have ${repo} repositories.`) //used to create formated string.

console.log(typeof name) 
console.log(string)
