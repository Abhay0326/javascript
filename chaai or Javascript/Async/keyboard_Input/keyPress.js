const div=document.querySelector("#content");

window.addEventListener('keydown', (e)=>{
    console.log(e.key);
    div.innerHTML=`
        <table>
            <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
            </tr>
            <tr>
            <td>${e.key === " " ? "space" :e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
            </tr>
        </table>
    `;
},false)