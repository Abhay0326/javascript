let numOfGuesses=10;
let prevGuesses=[];
let randNum=parseInt((Math.random()*100)+1)
console.log(randNum)

const submit=document.querySelector('#submit');
let msg=document.querySelector('#msg');
const guesses=document.querySelector(".guesses");
const remainGuess= document.querySelector(".remainGuess");
let guessValue=document.getElementById("guessValue");

//adding 'submit' eventListener to the form Element.
submit.addEventListener('click', (e)=>{
    e.preventDefault();//stop the default functionality of this Event.

    msg.innerHTML="";//reset message(#msg) content at every submit.

    //save the guessValue and reset it's value.
    const numGuessed=parseInt(guessValue.value);
    guessValue.value="";

    //perform task only if inputValue is a Number and lie between 1 to 100. Else show a Error-Message.
    if(!isNaN(numGuessed) && numGuessed<=100 && numGuessed>=1){
        prevGuesses.push(numGuessed);//storing the guesseed valued in a Array
        checkGuess(numGuessed)
        
        //updating the previous guesses in html.
        guesses.innerHTML=prevGuesses;

        numOfGuesses--; //decreasing number of Guesses by one.

        //updating the number of guesses remaining.
        remainGuess.innerHTML=numOfGuesses;
        
        //if user entered the right number then, display a Win-Message and reset other things. 
        if (numGuessed==randNum){
            const color="green";
            displayMessage("YAYYY!!! you hit the right number....",color)
            endGame()
        }

        //If user reached end of the limit of 10. Then, show a Loss-Message and reset other things. 
        if(numOfGuesses == 0 ){
            const color="#993355"
            displayMessage(`Oohhh!!! Out OF Chances Please Try Again.... (Random Number was ${randNum})`,color)
            endGame()
        }
    }

    //show Error-Message when, input is not a number or out of the range of 1 to 100.
    else{
        displayMessage("Enter a Valid integer between 1 and 100.","red")
    }
})

//Check the number is greater or less than the random number.
function checkGuess(guess){
    if(guess>randNum){
        displayMessage("Number is Too High")
    } else if (guess < randNum){
        displayMessage("Number is Too Low")
    }
}

//display message with given color.
function displayMessage(message,color="white"){
    msg.innerHTML=message;
    msg.style.color=color;
}

//reset everything
function endGame(){
    randNum=parseInt((Math.random()*100)+1);
    numOfGuesses=10;
    prevGuesses=[];
    guesses.innerHTML=prevGuesses;
    remainGuess.innerHTML=numOfGuesses;
}