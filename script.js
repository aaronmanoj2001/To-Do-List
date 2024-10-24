const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
function AddTask(){
    if(inputBox.value === ''){
        alert("write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
}
listcontainer.addEventListener("click",function(e)){
    if(e.target.tagname == "li"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagname == "span"){
        e.target.parentElement.remove();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}