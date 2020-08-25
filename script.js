let proArr= new Array();

function addProToArr(){
    if(document.getElementById('input').value!='')
    proArr.push(document.getElementById('input').value);
    displayPro();
}

function displayPro(){
    let doc=`<tr>
                 <th colspan="3">Product name</th>
                 <th id="Amount">Amount:  ` +proArr.length+ `</th>
            </tr>`;
    for(i=0; i< proArr.length; i++){
        doc+= `<tr>`;
            doc+= `<td>`;
                doc+= proArr[i];
            doc+= `</td>`;
            doc+= `<td><button onclick="edit(` +i+  `)">Edit</button></td>`;
            doc+= `<td><button onclick="del(` +i+  `)">Delete</button></td>`;
        doc+= `</tr>`;
    }
    document.getElementById('myTable').innerHTML= doc;
}

function del(index){
    proArr.splice(index, 1);
    displayPro();
}
function edit(index){
    proArr[index]= prompt('Doi ten san pham', proArr[index]);
    displayPro();
}