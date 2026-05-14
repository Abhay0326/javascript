// 'Prototype' is hierarchaly extending a contructor function. 
// We can access any method/property at any level of hierarchy by just using dot-operator('.').
// The searching for the object/property is done by prototype.

/**As, everything extends the Object() in JS.
 * So, if we want a new-method/property accessable in all data-types 
 * we can do so by simply extending the Object-constructor using prototype.
 */
const hero=["IronMan","Thor","Hulk"] 
const universe="Marvel"

const heroPower= {
    ironMan:"IronSuit",
    Thor:"Hammer",
    Hulk:"Anger",

    getIronManPower:function(){
        console.log(`Power of IronMan is ${this.ironMan}`)
    }
}

//this method will accessable by all objects of any constructor(string,array,function,object)
Object.prototype.commonInAll= function() {
    console.log("I am present in all Objects.");
}  

hero.commonInAll()
universe.commonInAll()
heroPower.commonInAll()

//This method will accessable by all objects of 'String'-type only.
String.prototype.trueLength= function(){
    console.log(`Context: ${this}`);
    console.log(`True length of string is ${this.trim().length}`);
}

universe.trueLength()

//******Inheritance using prototype*******

const user ={
    name:"chai",
    email:"chai@gmail.com"
}

const teacher={
    makeVideo:true
}

const teachingSupport={
    isAvailable:true
}

const TASupport={
    makeAssignment:"JS assignments",
    fullTime:true,
    //We can give access of another object to a object using "__proto__" property
    //but __proto__ is not used now-a-days.
    __proto__: teachingSupport, 
}

console.log(TASupport.isAvailable)

//Modern Syntax:
Object.setPrototypeOf(teachingSupport,teacher) //teacherSupport-Object is inherits the teacher-Object.
console.log(teachingSupport.makeVideo)