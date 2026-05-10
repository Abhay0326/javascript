/**A "Promise" is an object 
    representing the eventual completion or failure of an asynchronous operation.
 * Instead of immediately returning the final value, 
    the asynchronous method returns a promise to supply the value at some point in the future.
 * 
 **A Promise is in one of these states:
    pending   : initial state, neither fulfilled nor rejected.
    fulfilled : meaning that the operation was completed successfully.
    rejected  : meaning that the operation failed.  
 *
 *    
 */ 

//Method-1 of creating and executind a promise.
const promiseOne= new Promise((resolve,reject)=>{
    //Here, we do any async task(s) such as,
    //DB-calls, cryptography, file-reading, network
    setTimeout(()=>{
        let data=true;
        if(data){
            console.log("Promise-1 retrived data")
            resolve(); //we will call resolve() when the expected task will done.
        }
    },1000)
})

promiseOne.then(()=>{
    console.log(`Promise-1 resolved Successfully`)
})

//Method-2 of creating and executing a promise(without storing object in a variable).
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise-2 resolved")
        resolve();
    },2000)
}).then(()=>{
    console.log("primise-2 consumed successfully")
})

/**Promise return a thenable object.
 *## we can 'chaining' as many then() one after another.
 * They will call each-other one-after-another, also can return some value to their next then().
 * If any of one then() is failed to complete the promise then, catch() will run.
 * 
 * catch() will execute when promise is rejected or any one-of then() is failed. 
 * catch(error) take an parameter, and the Error is passed into this parameter.
 * 
 * finally() is run always, irrespective of the promise is resolved or rejected.  
 */
let promiseThree= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const error=false;
        if(!error){
            data={user_name:"abhay007", password:9876};

            resolve(data) //we can also pass a value in resolve of any-type.
        }
        else{
            reject(`Unable to retrieve data.`)
        }
    },1000)
})


let pwd= promiseThree.then((data)=>{
    console.log(`promise-3 consumed: user_name=${data.user_name}`);
    return data.password;
})
.then((password)=>{
    console.log(`user_password:${password}`)
})
.catch((error)=>{
    console.log(`Error:${error}`);
    return null;
})
.finally(()=>{
    console.log("Promise-3 is either resolved or rejected")
})

console.log(pwd);// run before completion of the promise and show status of the promise.

/**-----Handling promise using 'async-await' keywords-----------
 * we should use 'try-catch' inside 'async-await' to handle resolve and reject state of promise.
 * 
 * write 'async' ahead of async function.
 * write 'await' ahead of task where you think the program shlould wait till response generated.
 */ 
const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const error=false;
        if(!error){
            data={user_name:"abhay007", password:9876};
            resolve(data);
        } 
        else reject(`Unable to retrieve data.`);
    },1500)
}) 

async function consumePromiseFour(){
    try {
        let response= await promiseFour;
        console.log(`Promise-4 consumed: user=${response.user_name}`);
    }
    catch(error){
        console.log(error);
    }
}

consumePromiseFour()

//------------fetch() API (return's a promise object)-----------

//Method-1 (using try-catch)
async function getAllUsers(){
    try{
        let response= await fetch("https://api.github.com/users/Abhay0326");

        /**This response is not actual JSON it is header_file 
         * So, we have to parse JSON using json() method.
         */ 
        console.log(response);
        
        //NOTE: we also have to await for the json() to convert the data into js_Object.
        const data= await response.json(); 
        console.log(data);
    }
    catch(error){
        console.log(`Error:${error}`);
    }
}
getAllUsers();

//Method-2 (using promise)
//Now we know the fetch-API is actually returning a promise.
//That's why we can use .then(), .catch(), .finally() with it.
fetch("https://api.github.com/users/Abhay0326")
.then((response)=>{
    let data= response.json();
    return data;
})
.then((data)=>{
    console.log(`location:${data.location}`);
})
.catch((error)=>{
    console.log(`ERROR:${error}`);
})