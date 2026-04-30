/**JS-Engine become Async with help of API's of bellow functions.
 * 
 * To run a callBack-Function at every fixed interval of time.
 ** setInterval(<callBack>,timeInterval_InMiliSecond) //RUN-infinitly
 * To stop a interval callBack-Function we have to clear it unsing it's reference(variable).
 ** clearInerval(refrence_Of_Interval)
 *
 * To run a callBack-Function after a fixed time.
 * setTimeout(<callBack>,timeInterval_InMiliSecond) //RUN-only one time
 * To stop this setTimeout() to run the callBack before the given time, can be done with it's reference(variable).
 * clearTimeout(refrence_Of_Timeout)
 */ 

let start= document.getElementById("start")
let end= document.getElementById("end")

const randomColor=function(){
    let hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        let randIndex=Math.floor((Math.random()*10)+6);
        color+=hex[randIndex];
        // console.log(randIndex);
    }
    return color;
}
start.addEventListener('click',(e)=>{
    var changeColor=setInterval(()=>{
        let color=randomColor();
        document.body.style.backgroundColor=color;
        console.log(color);
    },1000)

    end.addEventListener('click',(e)=>{
        clearInterval(changeColor);
        changeColor=null;
    },false)
},false)

