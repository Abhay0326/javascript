//class accessable in js after ES6+.
//NOTE: for creating classes in Js we don't have to use 'function' keyword to define a method inside it.

class User{
    //creating a constructor 
    constructor(username){
        this.username=username;
    }
    
    name(){
        console.log(`username: ${this.username}`);
    }

    //static method refer to the context of class not it's instances.
    //here, static is differ from java as we have to use 'this' in static method also, but it's not allowed in java.
    static id() {
        this.userId= parseInt(Math.random()*1000+1)
    }
}

const user1=new User("abhay");
user1.name()

class teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;
    }

    changePassword(newPwd){
        this.password=newPwd;
    }
}

const teacher1=new teacher("chai","chai@gmail.com",8851);
console.log(teacher1);
teacher1.name()
teacher1.changePassword(997755)
console.log(teacher1);

//static mathod call
User.id()
console.log(User.userId)
User.id()
console.log(User)