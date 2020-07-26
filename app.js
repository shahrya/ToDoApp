var list = document.getElementById("list")

function addTodo(){
var todoitem = document.getElementById("todo-item")
var li = document.createElement("li")
var liText = document.createTextNode(todoitem.value)
li.appendChild(liText)


var dltBtn = document.createElement("button")
var dltText = document.createTextNode("Delete")
dltBtn.setAttribute("onfocus","this.style.backgroundColor='yellow'")
dltBtn.setAttribute("onblur","this.style.backgroundColor='lightgreen'")
dltBtn.setAttribute("onclick","deleteItem(this)")
dltBtn.appendChild(dltText)


var editBtn = document.createElement("button")
var editText = document.createTextNode("Edit")
editBtn.setAttribute("onfocus","this.style.backgroundColor='yellow'")
editBtn.setAttribute("onblur","this.style.backgroundColor='lightgreen'")
editBtn.setAttribute("onclick","editItem(this)")
editBtn.appendChild(editText)


li.appendChild(dltBtn)
li.appendChild(editBtn)
list.appendChild(li)

todoitem.value = ""
}

function deleteItem(e){
    e.parentNode.remove()
}

function deleteAll(){
       list.innerHTML = ""
}

function editItem(e){
    var val = prompt("Enter Updated Value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val
}