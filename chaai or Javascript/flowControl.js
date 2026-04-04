//if contion is same as java.

//Switch-Case 
let day=3
switch (day) {
    case 1:
        console.log("Sunday")
        // break;
    case 2:
        console.log("Monday")
        // break;
    case 3:
        console.log("Tuesday")
        // break;
    case 4:
        console.log("Wednesday")
        // break;
    default:
        console.log("Invalid Input")
        // break;
}

/**NOTE: If we don't use the "break" then the body of all the case and default 
will executed after first matched Case_Value, till it found first break statement at any point.*/

//Falsy values
// "" , false, 0, -0, bigInt 0n, null, undefined, NaN

//Truthy values (everything except above falsy values)
//such as, "0", " ", [], {}, function(){} (EmptyFunction)

/***********NOTE THAT**********/
console.log(false == "") //true
console.log(false == 0)  //true
console.log("" == 0)  //true

/*****Nullish Coalescing Operator(??): related to null and undefined values******/
//It used to handle the case. when null/undefined value return by a function, but we need another flag-value instead of null/undefined. 
/****for example: if we call a server and in some case it failed to load and return null.
    *Then we can handle this exception by calling another server or function.
    */
let val1;
// val1= 10 ?? 20   //assign: 10
// val1= null ?? 10   //assign: 10
// val1= undefined ?? 20   //assign: 20
// val1= null ?? 10 ?? 20   //assign: 10
val1= null ?? undefined ?? null   //assign: null

console.log(val1)