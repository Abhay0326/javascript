/************APPEND-Element*************/

/**NOTE: Using 'innerText' to add TEXT-Node is not optimal for large data.
 * As, it will 'TRAVERSE' through all the Child-Nodes to add this Text-Node at the end.
*/
let ul=document.querySelector('.languages');

function addLanguage(langname){
    const li=document.createElement('li');
    li.innerText=`${langname}`; //Using string interpolation as we are not sure the langname will always a string or not.
    ul.appendChild(li);
}

addLanguage("Java");
addLanguage("Javascript")

/**Optimized way to add new element with Node-Element(s).*/
function optimizedAddLanguage(lang){
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(lang)); //Append TextNode as a Child-Element.
    ul.appendChild(li);
}
optimizedAddLanguage("C#")

/***********EDIT-Element************/
let secondElement= document.querySelector(".languages > li:nth-child(2)"); 

//Method-1(efficient)
const li=document.createElement("li");
li.textContent="GoLang";
secondElement.replaceWith(li); //replacing 2nd-li-ChildNode with new li-Child.
//Method-2(Basic)
//secondElement.outerHTML="<li>GOLang</li>"
//Method-3(very-Basic)
//secondElement.innerHTML="GoLang"

/***************Remove-Element****************/
let lastElement=document.querySelector(".languages > li:last-Child");
lastElement.remove()