// Lets see what I can do:
var listItem = document.getElementById("newListItem");
var btn = document.getElementById("btn");
var outputArray = [];

btn.addEventListener("click", AddElement);

function AddElement() {
  outputArray.push(listItem.value);
  outputList.innerHTML = outputArray;
}
