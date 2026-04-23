const form= document.querySelector("form")

form.addEventListener('submit', (e)=>{
    //We have to stop the GET/POST action of form as we have no server yet.
    e.preventDefault(); //this will stop all the default action of the current Event.

    /**NOTE:Always Extract content of form after submition of the form. Else it will retrn empty data.
     * Because, the connect of the form may or may-not be filled before submiting.
     */
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#result');

    //BMI calculation
    const bmi=(weight/((height*height)/10000)).toFixed(2);

    //BMI category
    let cat;
    if (isNaN(bmi)) cat="";
    else if (bmi>0 && bmi<18.6) cat="Under Weight";
    else if (bmi>24.9) cat="Over Weight";
    else cat="Normal Weight";


    //Handling the case when bmi is NaN. Always use isNaN() to check NaN.
    if (!isNaN(bmi) && bmi!=0 && cat) result.innerHTML=`<span>BMI:${bmi} (${cat})</span>`;
    else result.innerHTML= "height and/or weight, Not_a_Number or Zero.";
})