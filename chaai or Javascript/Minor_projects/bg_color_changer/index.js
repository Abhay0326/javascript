/**addEventListener() function used to set EventListener on any Element
 * It takes two arguments, EventName and call_back function for the event.
 * Each event creates a Element which conatins info about the Event.
 * So, we have to pass this EventElement to the callBack function in it.
*/

const buttons= document.querySelectorAll('.button');
console.log(buttons)
buttons.forEach( (button)=> {
    console.log(button);
    button.addEventListener('click', function(event){
        console.log(event); //return Event Element
        console.log(event.target) //return the Element which called this event.
        if(event.target.id === 'red') {
            document.body.style.backgroundColor=event.target.id;
        }
        if(event.target.id === 'green') {
            document.body.style.backgroundColor=event.target.id;
        }
        if(event.target.id === 'blue') {
            document.body.style.backgroundColor=event.target.id;
        }
        if(event.target.id === 'yellow') {
            document.body.style.backgroundColor=event.target.id;
        }
    })
})