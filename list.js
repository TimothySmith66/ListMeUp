// Lets see what I can do:
var listItem = document.getElementById("newListItem");
// var btn = document.getElementById("btn");
// var deleteBtn = document.getElementById("deleteBtn");

var outputArray = [];

addBtn.addEventListener("click", addElement);
deleteBtn.addEventListener("click", deleteElement);

function addElement() {
  outputArray.push(listItem.value);
  // outputList.innerHTML = "";
  for (i = 0; i < outputArray.length; i++) {
    var p = document.createElement("p");
    const outputElement = document.createTextNode(outputArray[i]);
    console.log(outputArray[i]);
    p.appendChild(outputElement);
    p.setAttribute("class", "item");
    console.log("loop is running");
    outputList.appendChild(p);
  }

  listItem.value = "";
}

function deleteElement() {
  outputArray.pop(listItem.value);
  outputList.innerHTML = outputArray;
}
