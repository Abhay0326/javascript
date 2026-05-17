/**Getter-Setter in oops used to impliment the concept of encapsulation.
 * In Js we use 'get <property>{}' and 'set <property>{}' methods in a class or object to define getter and setters.
 * Name of the getter and setter method should be same as it's property.
 * NOTE: we have to write getter and setter BOTH for a property if we want to encapsulate it.
 * NOTE:if we use same name of property inside get/set and inside constructor/class.
        it will cause of CallStack-OverFlow ERROR due to race-condition between constructor and get/set. 
*/

//****Method-1: getter-setter in class

class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    //getter should always return something
    get email(){
        return this._email.toUpperCase();
    }

    //setter will not requied to return
    set email(val){
        this._email=val;
    }
}

let cat=new User("cat@maow.ai",1234);
console.log(cat.email) //this way we get the value return by getter.
console.log(cat._email) //this way we can access the original value of email stored directly.

//Drawback: this way we cannot create a real PRIVATE property or methods.
//To solve this '#' is introduced in ES2022.

class privateUser{
    #email;
    #password;
    constructor(email,password){
        this.#email=email;
        this.#password=password;
    }

    get email(){
        return this.#email.toUpperCase();
    }
    set email(val){
        this.#email=val;
    }

    get password(){
        return `23nje${this.#password}nfd3`
    }
    set password(val){
        if ((val.toString()).length>4) this.#password=val;
        else console.log(`password length must be greater than 4`)
    }
}

let dog=new privateUser("dog@bhow.ai",9876)
console.log(dog)
console.log(dog.email) //Now, it's not possible to access origianl value of email-property directly.

//****Method-2 getter-setter in function

let User2= function(email,password){
    this._email=email;
    this._password=password;

    Object.defineProperty(this,"email",{
        get:function(){
            return this._email.toUpperCase();
        },
        set:function(val){
            this._email=val;
        }
    })

    Object.defineProperty(this,"password",{
        get:function(){
            return `sdfh23${this._password}sef34`;
        },
        set:function(val){
            this._password=val;
        }
    })
}

const hulk=new User2("hulk@avengers.us","avghulk#123")
console.log(hulk) 
console.log(hulk.email) 
console.log(hulk.password) 

//****Method-3 getter-setter in Object
const User3={
    _email:"spidy@avengers.us",
    _password:"spider#mj",

    get email(){
        return this._email.toUpperCase();
    },
    set email(val){
        this._email=val;
    }
}

console.log(User3.email)