/**XMLHttpRequest() class is used to call a API and retrieve any type of data.
 * But, it is a Legacy way to do so, now we use fetch() API to call APIs.
 * To use it we have to create a new object. 
 * 
 * -----ReadyStates-----
Value	State	            Description
0	    UNSENT	            Client has been created. open() not called yet.
1	    OPENED	            open() has been called.
2	    HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	    LOADING	            Downloading; responseText holds partial data.
4	    DONE	            The operation is complete.

 ** ----Instance properties-----
 * **object.readyState //return the state of API-call.
 * **object.responseType= "<type:String | default>" //called after open() and before send(), usend to request-server for a specific type(text,json,document,arraybuffer) of data.
 * **object.response // return the requested type of data if 'readystate == 4' otherwise null.
 * object.responseText //only return a 'text-type' data. It always contain the data which currently loaded and loaded all the data when readystate==4 and status==200.
 * object.responseURL //return the final url after all redirects, otherwise empty string "".
 * **object.status  //return status code(200,302,404,...) of the request after LOADING(3) readystate, otherwise return 0.
 * object.statusText //return status Text-Code(OK |default, NOT FOUND,...) after LOADING(3), otherwise return empty string "".
 * object.timeout= <time in milliseconds> //it stopped the request after a given time and fire a 'ontimeout-Event'.
 * 
 ** ------Instance Methods------
 * **object.open("GET/POST/SET..", url, true(async| default)/false(sync)) //to open a new request.
 * object.getAllResponseHeader()  //return header or all the requests concatenated in a string, separated by CRLF(CR-\r, LF-\n).
 * object.abort() //abort the request if it has already been sent.
 * **object.send(<body>)  //used to send request to the server and take one argument which is the "data to be send to the server".
 *                      //If not required to send data in GET/HEAD/PUT/DELETE methods, set this input as null(default value).
 * object.setRequestHeader("Content-Type","application/json") //used to set header for the data to be sent to server, before send().
 * 
 ** -------Event-Listeners--------
 * **object.onreadystatechange = callback()=>{} //This event listen on every change of readystate and run the given callback.
 * object.onabort = ()=>{} //This event listen when requested is aborted.
 * object.onerror = ()=>{} //Fired when the request encountered an error
 * object.onload = ()=>{}  //Fired when a request transaction completes successfully.
 * object.onloadstart = ()=>{} //Fired when a request has started to load data.
 * object.onprogress = ()=>{} //Fired periodically when a request receives more data.
 * object.ontimeout = ()=>{}  //Fired when progress is terminated due to preset time expiring
 */

let card= document.querySelector("#card");

card.addEventListener('submit',(e)=>{
    e.preventDefault();
    const url=document.querySelector("#url").value;
    apiCall(url);
    
},false)

//Function to make api-call and retrieve-data then place it in html-#Card.
function apiCall(url){
    let xhr=new XMLHttpRequest();
    xhr.open("GET",url,true);
    xhr.responseType="text";
    // xhr.addEventListener("progress",(e)=>{console.log(e.loaded)});

    xhr.onreadystatechange =()=>{
        console.log(xhr.responseURL);
        if(xhr.readyState === 4){
            const data=JSON.parse(xhr.response);

            let image=data.avatar_url;
            let name=data.name;
            let repo=data.public_repos;

            card.innerHTML=`<div id="cardContent">
                <img src=${image} alt="github-avatar"><br clear="all">
                <p>Name: ${name}</p>
                <p>Repositories: ${repo}</p>
            </div> `;
        }
    }
    xhr.send();
}