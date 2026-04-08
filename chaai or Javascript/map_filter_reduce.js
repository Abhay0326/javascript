
const books=[
    {
        title:"Book-1",genre:"Science",publish:"1998",edition:"2009",quantity:50
    },
    {
        title:"Book-2",genre:"Fiction",publish:"1999",edition:"2012",quantity:25
    },
    {
        title:"Book-3",genre:"History",publish:"1998",edition:"2004",quantity:55
    },
    {
        title:"Book-4",genre:"Science",publish:"2004",edition:"2019",quantity:44
    },
    {
        title:"Book-5",genre:"History",publish:"2002",edition:"2014",quantity:20
    }
]


/**************filter() method in a Array***************/
//It use to filter out data based on some condition(s) in a Array.
//It also take a callback-function as a argument.
//If you use filter, you get a subset of the objects.

//filter by genre
//NOTE:We are using {} below, in arrow function. So, we have to return Explicitely.
const history_books=books.filter( (item)=>{
    return item.genre === 'History';
})
// console.log(history_books)
//NOTE:We are not using {} below, in arrow function. So, It will return Implicitly.
const science_books=books.filter((item)=> item.genre === 'Science');
// console.log(science_books)

//filter the books whose genre is "Science" and published after "1990".
/**Method-1(if-condition) */
let book_title=books.filter((item)=>{
    if(item.genre==='Science' && item.publish>1990){
        return item.title;
    }
});
// console.log(book_title)

/**Method-2(Implicit_Return) */
book_title=books.filter((item)=> item.genre==='Science' && item.publish>1990 );
// console.log(book_title)

/**Method-3(Explicit_Return) */
book_title=books.filter((item)=> {return item.genre==='Science' && item.publish>1990} );
// console.log(book_title)

/********************map() method in a Array*************************/
//It iterate over each value of the array.
//It return a new array of same length to the original array.
//So, here we can use conditions to return a specific set of values, even after some modifications.

let updatedBooks=books.map( (item)=>{
    //updating genre of 'Science' to 'Musical'.
    if (item.genre === 'Science'){
        item.genre='Musical';
        return item;
    }
    else return item;
})
// console.log(updatedBooks);


/**NOTE_THAT:Always Return something(undefined for no-return) for all the values of the array,
 * Irrespective of any if-condition provided.
 */
let historyTitle=books.map( (item)=> {
    if(item.genre === 'History') return item.title; 
})
console.log(historyTitle); //Output:[ undefined, undefined, 'Book-3', undefined, 'Book-5' ]


/********************reduce() method in Array******************************/
//It return a single value.
//It takes two parameters in the callBack-Function-> (accumulator , currentValue).
//After writing the function definition we have to write Initial value of the accumulator, after a comma.
//Return a TypeError if accumulator not present and array is empty.

let nums=[2,3,7,5,8]

const total=nums.reduce((acc,currVal)=> {
    console.log(`Acc:${acc} | CurrVal:${currVal}`); //to track values of acc and currVal.
    return acc+currVal}, 0);
console.log(total);

const totalBooks=books.reduce( (acc,currVal)=> acc+currVal.quantity, 0)
console.log(totalBooks);


/**************************************************************************/
//We can chain any number of map,filter and reduce in any order in an Array.

//Extract only the title of books publish after 2000.
const booksSubset=books.filter((item)=> item.publish>2000).map((item)=> item.title)
console.log(booksSubset);

//total history books published in or after 2004
const hisBooks2004=books
    .filter( function (item) {
        return item.edition>=2004 && item.genre==='History';
    })
    .reduce( function (acc,item){
        return acc+item.quantity;
    },0)

console.log(hisBooks2004);


