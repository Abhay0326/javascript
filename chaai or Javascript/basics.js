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
let course=String("     BCA    "); //this will create a primitive String not an object.
const strObj=new String(`Javascript ${repo} repositories.`) //making a sring-Object using String() function with new keyword.

console.log(name,repo+" repos") //concatination

//String Interpolation backTick/graveAccent(``)
console.log(`My name is ${name}. I have ${repo} repositories.`) //used to create formated string.

//---------------------String methods-----------------------
console.log(strObj.at(-5)) //can take negative index also
console.log(strObj.charAt(5)) //cannot take negative index.
console.log(strObj[5]) //return character at positive index only.
console.log(strObj.charCodeAt(5)) //return unicode integer value.

console.log(strObj.includes("repo")) //check given substring is part of string or not.
console.log(strObj.indexOf("r")) //return index of substring, -1 if not found.
console.log(strObj.lastIndexOf("r")) //same as indexOf() but start search from last.

console.log(strObj.endsWith(".")) //true
console.log(strObj.startsWith("java")) //false
console.log(strObj.repeat(2)) //return a string contains given number of copies concated togather.
console.log(strObj.replace("i","I")) //(only once)find the 1st subString and replace it with 2nd subString.
console.log(strObj.replaceAll("i","I")) //replace all the occurance.

console.log(strObj.substring(-2,10)) //(negative index not valid)1st parameter -> startIndex & 2nd -> number of character to be extract.
console.log(strObj.slice(2,-5)) //(negative index valid with some caution) Used to slice subString(general rules of slicing followed).
console.log(strObj.split(" ",2)) //1st parameter -> from where to split and **2nd -> number of elements in List of subStrings.
console.log(course.trim()) //remove left and right whitespaces.

console.log(strObj.toUpperCase())
console.log(strObj.toLowerCase())

////////////////////////////////////////////////////////////////////////////
//----------------------------Number and Maths---------------------------//

const n=200 //dynamic type casting by compiler.
const number=new Number(100.4576) //object of Number() class. Explicite type casting.

//-----methods of number class(all method returns a primitive string)
console.log(number.toString())
console.log(number.toFixed(2)) //fix number of decimal places and rounded-Off.
console.log(Number(1000000).toLocaleString("en-US")) //convert number into comma seperated string according to IN/US standard.
console.log(number.toPrecision(4)) //return a number conerted to given precision. 
console.log(number.toExponential(3)) //convert given number in exponential notation with given number of decimal places.
console.log(typeof number.valueOf()) //convert Number object to primitive number.

console.log(Number.MAX_VALUE, Number.MIN_VALUE, Number.MAX_SAFE_INTEGER, Number.POSITIVE_INFINITY)

//--------------Math Class--------------
console.log(Math.PI, Math.E, Math.LN2)
console.log(Math.round(number))
console.log(`Absolute: ${Math.abs(-45)} \nFloor Integer: ${Math.floor(4.76)} \nCeil Integer: ${Math.ceil(4.1)}`)

console.log(Math.random()) //return random no. between 0 to 1.
//random number [1-10]
console.log(Math.floor((Math.random()*10) +1)) 
//random number [min-max)
const min=22
const max=30
console.log(Math.floor((Math.random()*(max-min)) +min)) 