/**NOTE: All the events are run in a order */

//Attach Event Listener
//Method-1
// document.getElementById("carList").onclick = function(e){
//     alert("clicked on Car List")
//     console.log(e)
//     console.log(e.type)
// }

//Method-2(recomended)
document.querySelector("#carList").addEventListener('dblclick', (e)=>{
    let targetElement=e.target; //target Element is the actual element where the event is triggered(here:img,a)
    
    //ON-DoubleClick remove only the the image with listItem-Tag from ul. 
    if(targetElement.tagName === "IMG"){
        /**'li' is parent of 'img' tag.
         * then, to remove the complete 'li' we have to first get it by parentNode property. 
         */ 
        const sure=confirm(`Are you sure!!\nYou want to Remove Image of id:${targetElement.id}`); //return true/false
        if(sure) targetElement.parentNode.remove();
    }


}, false)

//disable copy to whole page
document.addEventListener('copy',(e)=>{
    e.preventDefault()
    alert("copy is disabled")
},false)

//preventing The default functionality of the 'a' tag.
document.querySelector("#google").addEventListener('click', (e)=>{
    e.preventDefault();
},true)


/**NOTE:The third argument in addEventListener() is true/false to control the EVENT-PROPAGATION.
 * where, 'false(default)' for event-bubbling-propagation(inner -> outer event-trigger),
 * 'true' for event-capturing-propagation(outer -> inner event-trigger).
 * To prevent this propagation we can use "Event.stopPropagation()"" method.
 */

