let ar=[1,2,3,4,5] //Array object
let array= new Array(2,3,4,5,6,7) //Array Object

// console.log(array[3]) //access using indexing

//------------Array Methods----------------
// console.log(array.length) //Length by length attribute.
// console.dir(array) //same as python dir() function but only work in browser console.

array.push(8) //add element at end
x=array.pop() //remove last element and return it, return undefined if empty array
// console.log(x, array)

array.unshift(1) //add element at 0-index.
array.unshift(0)
y=array.shift()  //remove element from start and return it.
// console.log(y, array)

// console.log(array.includes(10)) //check for the given value.
// console.log(array.indexOf(3)) //index by value, if not found return -1.
// console.log(array.join()) //convert array to string.

s1=array.slice(1,3) //return a copy of the sub-array(#last index not included).
// console.log(s1,array)
s2=array.splice(1,3) //edit in original array, and return the sub-array(#Including last index). 
// console.log(s2,array)

const new_array=ar.concat(array) //concatinate two arrays and return a new array
console.log(new_array,ar)

/***impotant***/
const new_array2=[...ar,...array,...ar,..."Abhay"] //adding values using SPREAD-opperator(...).
console.log(new_array2)

let new_ar=Array.of(ar,array,"abhay"); //add given values in an array as a single element.
console.log(new_ar)

const nestedArray=[[1,2,3],[4,5,6,[7,8]],9,10] 
console.log(nestedArray.flat(Infinity)) //convert nested array into single array.

console.log(Array.isArray("A")) //return Flase as "A" is not a array.
console.log(Array.from("Abhay")) //convert an Array like object to array.Return an empty Array[] if cannot convert.

