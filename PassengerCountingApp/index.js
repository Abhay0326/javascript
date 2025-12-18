let count=0;

let counter=document.getElementById("counter");
let counts=document.getElementById("counts");

function increment(){
    count+=1;
    document.getElementById("counter").innerText=count;
}

function save(){
    let countStr= count + " - ";
    document.getElementById("counts").textContent+=countStr;
    count=0;
    document.getElementById("counter").innerText=0;

}