/**NOTE: Js is a Prototype based language, logically it not a object-oriented-language.
 *       Even then we have given class, this, and new keywords in js to create class like java. 
 */ 

//Remember: in global context of node 'this' keyword return an empty object({}). we use this keyword to refer current context.

console.log(this) //return empty object-{}

const obj ={
    username:"abhay",
    loginCount:12,
    isLoggedIn:false,
    context: function() { console.log(this)} //here, this return current context-object.
}
obj.context()

//***********In js we can create objects without using class keyword**************

const user= function(username,loginCount,isLoggedIn){
    //here we adding values in the current context-object using 'this-keyword'.
    this.username=username,
    this.loginCount=loginCount,
    this.isLoggedIn=isLoggedIn,

    this.greeting= function(){
        console.log(`Welcome ${username}`);
    }
    return this;
}

/**So, without using new-keyword the corrent context will be overidden...
 * each time we call the constructor function by passing new values.
 */ 
// const userOne= user("abhay",14,1);
// console.log(userOne);
// const userTwo= user("ram",1,1);
// console.log(userOne);

//Hence, to actually create a new-object-{} with the constructor, we have to use 'new' keyword.
//So, the 'new' keyword will create a new memory allocation for the object-{}, everytime.
const userOne= new user("abhay",12,1);
console.log(userOne)
const userTwo= new user("ram",1,1);
console.log(userTwo)

console.log(userOne.constructor) //'constructor'-method return the Contructor-function-reference of the instance.
console.log(userOne instanceof user) //'instaneof' check the given instance is the instance of class/constructor-'user' or not..