function setUsername(username){
    //complex DB calls
    this.username=username;
    console.log("called")
}

function createUser(username, email, pwd){
    //Here, below function call is done but it get removed along with it's context from call-stack. 
    //Cause of this it's execution-context is not exist for this function's context.
    //Hence, this function will not get the username from context of setUsername() function.
    setUsername(username)

    this.email=email;
    this.password=pwd;
}

const user = new createUser("abhay","abhay@google.com", "998877");
console.log(user); //print only the context of createUser()-function

//**********Using function.call() to overcome above problem************/

function createNewUser(username, email, pwd){
    //Now, we can say the another function call to use our 'existing-context-object' instead of your-newContextObject.
    //Using function.call(<object-of-context>, args...)
    setUsername.call(this,username)

    this.email=email;
    this.password=pwd;
}

const newUser= new createNewUser("abhay","abhay@google.com", "998877");
console.log(newUser); //print the context of createUser() with setUsername() functions.