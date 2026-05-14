/**
 **** Behind the scenes of the new keyword:

 * A new object is created: The new keyword initiates the creation of a new JavaScript object.
 * Prototype linking: The newly created object is linked to the prototype property of the constructor function.
    This allows the object to access properties and methods defined on the constructor's prototype.
 * Constructor call: The constructor function is called with the specified arguments, 
    and this is bound to the newly created object.
 * Return value: If no explicit return value is specified from the constructor, 
    JavaScript automatically assumes the newly created object to be the intended return value.
 *
 */

/**
 * NOTE: Everything in JS extending the Object() via prototype. 
 *       This make possible the existance of OOP.
 */
console.log(String.prototype) //object
console.log(Array.prototype) //object
console.log(Function.prototype) //object

//Constructor Function
const createUser= function(username,email){
    this.username=username;
    this.email=email;
    this.loggedIn=true;
}

//extending the contructor function via prototype.
createUser.prototype.isLoggedIn= function(){
    if (this.loggedIn===true) console.log(`User is loggedIn`);
    else console.log("User is loggedOut")
}

// The 'new-keyeword' create a new object in memory for each context. 
// which hold the data only of the specific context.
const user1= new createUser("chai","chai@gmail.com")
const user2= new createUser("code","code@gmail.com")

console.log(user2.username)
user1.isLoggedIn()
user1.loggedIn=false
user1.isLoggedIn()