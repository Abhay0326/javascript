const clock=document.getElementById("clock");

/**setInterval() function use to run given function at fixed-interval of time till program is running.
 * It take's two arguments callback-function and number of miliseconds of interval.
 * syntax: setInterval(function(){}, <time in miliSeconds>);
*/
setInterval(function(){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
}, 1000)