/**
 * document.getElementById("title")
 * document.getElementById("title").id //Return value of id attribute.
 * document.getElementById("title").class //Return undefined as in backend class attribute reffer as className
 * document.getElementById("title").className //Return the value of class Attribute.
 * document.getElementById("title").getAttribute('class') //Return the value of class Attribute.
 * document.getElementById("title").setAttribute('class','title') //change the value of the 'class' attribute to 'title'.
 * 
 * 
 * document.getElementById("title").setAttribute("class","title") //This will replace complete value of the 'class' with 'title'. 
 * let title=document.getElementById("title");
 * title.style.backgroundColor='yellow';
 * title.style.padding='20px';
 * title.style.radius='15px';
 * 
 * innerText //Return the text visible on the page of browser. 
 * textContent //Return all the text actually written in our html but not displayed on the page.
 * innerHtml  //Return all the content including inner Html tags and it's content.
 */

let title=document.getElementById('title')
let paraTest=document.getElementById('test')
let button=document.getElementById("bt")
let header2=document.getElementById("header2")

function test(){
    //It is a good practice to check that the tag is loaded or not in browser.
    if(paraTest ){
        paraTest.innerHTML="Hello World!"
    }
    else console.warn("html not leaded Yet!")
}

const titleBorder= ()=>{
    if(title){
        title.style.textDecoration='underline';
        title.style.border='2px solid white';
        title.style.borderRadius='15px';
        title.style.padding="15px"
    }
    else console.warn("html not leaded Yet!");
}

let innerTag=document.getElementById("innerTag")
const innerTags=()=>{
    if(header2 && innerTag){
        textWithHtml=header2.innerHTML;
        allTextWithoutHtml=header2.textContent;
        unhiddenText=header2.innerText;

        innerTag.innerHTML="innerHtml: "+textWithHtml+"<br>"+
        "textContent: "+allTextWithoutHtml+
        "<br>"+"innerText: "+unhiddenText;
    }
    else console.warn("html not leaded Yet!");
}


/**QuerySelector used to select one element at a time using selectors same as CSS-Selectors.
 * 
 * document.querySelector('h1') //select the 'first' found 'h1' tag from the html.
 * document.querySelector('input[type='radio']') //select the 'first' found "input tag with type='radio'"
 * document.querySelector('.heading') //select the first matched 'heading' class.
 * document.querySelector('#title') //select the 'title' id.
 * 
 * QuerySelectorAll used to select all the matched elements.
 * ***It return a 'NodeList' which is lack of some methods of a Array. 
 * ***Note: but NodeList having 'forEach' loop method.
 * 
 * document.querySelectorAll('h2') //It will select all the h2 elements and return them into a 'NodeList'.
 * ***Similary, the selector can be any CSS-Slector.
 */

//Select by tag_name
let allH1Tags=document.querySelectorAll('h1')
allH1Tags.forEach((h1)=>{
    h1.style.color="Pink";
});

/** getElementsByClassName() used to select all the elements of having same class.
 * ***It return a 'HTMLCollection' which is lack in most methods of a 'Array'. 
 * ***Even it don't have 'forEach' loop like NodeList. So, we have to convert it into a Array to use map,forEach,.... 
 */

//Select by class_name
let allLiTags=document.getElementsByClassName('list-item');
//Note: here it is HTMLCollection, but we can use general for-of-loop to iterate over it same as Array.
for (li of allLiTags){
    li.style.border="2px dashed white";
    li.style.padding="10px";
}

allLiTags=Array.from(allLiTags) //Array.from() return a new_Array.
allLiTags.forEach((li)=>{
    li.style.margin="10px";
    li.style.color="lightblue";
});