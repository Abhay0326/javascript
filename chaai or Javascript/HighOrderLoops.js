let str="Hello how are you!";
let arr=[1,2,3,4,5,6,7,8]
const map=new Map();
map.set("js","javascript");
map.set("py","python");
map.set("cpp","C++");
map.set("java","java");


const obj={
    name:"Abhay",
    course:"BCA",
    lang:"java",
    university:"MUJ"
}

/***************for-of loop(generally for ordered data type)********************/

//String
for(const latter of str){
    console.log(latter);
}

//Array
for(const val of arr){
    console.log(val)
}

//******map*******
//NOTE: this will NOT print the keys instead it will print array of key and value.
for(const key of map){
    console.log(key);
}
//We can do so, by unpacking map.
for (const [key, value] of map){
    console.log(`key:${key}  ,  value:${value}`);
}

//Object
/**NOTE: This will throw ERROR-"obj is not iterable".
 * Because Object have lack of iterator property as they are Unordered
 * But, array,map,string are ordered.
 * /
// for (const val of obj){
//     console.log(val);
// }

/*****************for-in Loop(generally for Object)***********************/
//for-in is designed to iterate over the keys of an object.

//string
for(let val in str){
    console.log(val); //This will print index(key)
}

//Array
for(let val in arr){
    console.log(val); //This will print index
}

//map
/**Map is not considered a "plain" object with enumerable properties in the same way
 * But, a standard Object is enumerable.
 */
for(let key in map){
    console.log(key); //This will print ****Nothing****
}

//Object
for(let key in obj){
    console.log(key); //This will print ****Key**** of the Object.
}

/***********************forEach loop(via forEach method)**************************/
//forEach method take a callback-function(function without name) as a argument.
//forEach loop can pass (value/index/complete_data) to the callback-function.

let count=0;
arr.forEach( function (val){  //Simple function
    console.log(`Index:${count}; Value:${val}`);
    count++;
} )

arr.forEach( (item) => {  //Arrow Function
    console.log(item);
})

arr.forEach( (item,index,data)=>{
    console.log(`${item}:${index}:[${data}]`);
    
})

//*****Iteration over list_of_Objects(generally comes from a DB).
const data=[
    {
        language:"Python",
        extention:"py"
    },
    {
        language:"JavaScript",
        extention:"js"
    },
    {
        language:"java",
        extention:"java"
    }
]

data.forEach( (item)=>{
    console.log(`Extensions:${item.extention}`);
})
