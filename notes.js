var responseDiv = document.body.querySelector(".response");
var list = [];

document.querySelector(".add_note").addEventListener("click", function (){
    var textValue = document.body.querySelector(".input").value;
        responseDiv.innerHTML = "";
        list.push(textValue);
        renderList();
})



function renderList(){
    var itemsDiv = document.body.querySelector(".items");
    itemsDiv.innerHTML = "";

    for(var i=0; i<list.length; i++){
        var ele=document.createElement("div");
        ele.innerHTML=list[i];
        itemsDiv.appendChild(ele);
    }
}

