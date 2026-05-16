//We can control the access of propertie(s) in a class.
//Using some in-built methods of Object-class which not visible in dropdown of browser-console.

//Example: we cannot modify/iterate over 'PI' value of Math-module.

//Modification
console.log(Math.PI) //3.141592653589793
Math.PI= 4;
console.log(Math.PI) //3.141592653589793

//Iteration: This will not print anything on console. As, all the properties of Math-Object are not iterable.
for( let [key,value] of Object.entries(Math)){
    console.log(`${key} : ${value}`);
}

//How is it possible....
const propOfPI = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(propOfPI) //We cannot modify it's writable, enumerable ,configurable,... property Descriptors.


//********How to add propertyDescriptor(s) on our own Object.********
const car={
    name:"Audi",
    model:"R8_GT_spyder",
    engine:"V8",

    bookCar:function(){
        console.log(`Congratulation, booking successfull`)
        console.log(`Your ${this.name} ${this.model} is comming soon...`)
    }
}

console.log(Object.getOwnPropertyDescriptor(car,'name'))

Object.defineProperty(car,'name',{
    writable:false, //now, name-proterty cannot be modify.
    enumerable:false, //now, name-property is not iterable.
})

car.name="Benz"//try to modify-name...but not modified as 'writable=false'.
console.log(Object.getOwnPropertyDescriptor(car,'name')) //name not changed

//Now, this loop unable to iterate over name-property.
for( let [key,value] of Object.entries(car)){
    //Eliminating function-typeof values.
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}