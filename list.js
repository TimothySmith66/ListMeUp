// Lets see what I can do:
var listItem = document.getElementById("newListItem");
// var btn = document.getElementById("btn");
// var deleteBtn = document.getElementById("deleteBtn");

var outputArray = [];

addBtn.addEventListener("click", addElement);
deleteBtn.addEventListener("click", deleteElement);

function addElement() {
  outputArray.push(listItem.value);
  outputArray;
  outputList.innerHTML = outputArray.join("");
  listItem.value = "";
}

function deleteElement() {
  outputArray.pop(listItem.value);
  outputList.innerHTML = outputArray;
}
