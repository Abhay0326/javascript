//*************Accessing and creating Elements*******************

const parent=document.querySelector('.parent');
// console.log(parent);

/**Parent --> Children
 **children' -attribute return the 'HTMLCollection' of all the children of a Node-Element.
 **we can acess them by 'loop' or 'indexing'.
 */
console.log(parent.children);
console.log(parent.children[1])

console.log(parent.childNodes) //'childNodes' return a 'NodeList' of all the child-Nodes
// NOTE: "childNodes" also includes 'Newline_Break'(added by Us or HTML) as a Node. 
// E.g: 7-Nodes for 3-Child_Elements.

console.log(parent.firstElementChild) //'firstElementChild' return the first-Child-Element of the Node.
console.log(parent.lastElementChild) //'lastElementChild' return the last-Child-Element of the Node.

for(let child of parent.children){
    if(child.innerText=='Apple') child.style.color="red";
    else if(child.innerText=='Mango') child.style.color="orange";
    else if(child.innerText=='Banana') child.style.color="yellow";
    child.style.fontSize="20px";
}

//children --> Parent
const child=document.querySelector('.list-item');
console.log(child.parentElement) //return the 'parent-Element' of the Node.

//children -->sibling
console.log(child.nextElementSibling) //return the 'Next-Sibling Element' of the child-Node-Element.
console.log(child.previousElementSibling) //return the 'previous-Sibling Element' of the child-Node-Element.
//NOTE: they will return "null" if no next or previous child found.

/*********************Creating Element*************************/
/** 'createElement(<tag_Name>)' method used to create a new Element.
 * But This method only create the tag in the memory not impliment it in the document.
 * We have to use 'appendChild(<child_Element>)' To bind this Element inside a Parent-Node-Element. 
 */

const authorDiv=(author="Abhay", color='#555099')=>{
    let div=document.createElement('div');
    div.innerText=author;
    div.style.textAlign='center';
    div.style.padding='10px'
    div.style.textDecoration='underline';
    div.style.color=color;

    return div;
}

document.body.appendChild(authorDiv("Author: Abhay Kumar")); //append Element at end of HTML-body.

parent.appendChild(authorDiv("New <div> Child Added in <ul> parent","red")); 
