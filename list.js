// Lets see what I can do:
var listItem = document.getElementById("newListItem");
// var btn = document.getElementById("btn");
// var deleteBtn = document.getElementById("deleteBtn");

var outputArray = [];

addBtn.addEventListener("click", addElement);
deleteLastBtn.addEventListener("click", deleteLast);
function loopi() {
  for (i = 0; i < outputArray.length; i++) {
    var p = document.createElement("p");
    const outputElement = document.createElement("button");
    outputElement.innerHTML = outputArray[i];
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "x";
    outputElement.appendChild(deleteBtn);
    p.appendChild(outputElement);
    p.setAttribute("class", "item");
    deleteBtn.setAttribute("id", `delete${i}`);
    deleteBtn.setAttribute("class", i);
    deleteBtn.addEventListener("click", deleteCurrent);
    outputList.appendChild(p);
  }

  listItem.value = "";
}
function addElement() {
  outputArray.push(listItem.value);
  outputList.innerHTML = "";
  loopi();
}

function deleteLast() {
  outputArray.pop(listItem.value);
  outputList.innerHTML = outputArray;
}

function deleteCurrent() {
  // deleteBtn.className var p = document.createElement("p");

  outputList.innerHTML = "";
  var who = this.id;

  var yes = who.slice(6, 7);
  console.log(yes);
  // var who = document.getElementsByClassName(`delete ${i}`);
  outputArray.splice(yes, 1);
  console.log(outputArray);
  loopi();
}
