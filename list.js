// Lets see what I can do:x
var gridDiv = document.createElement("div");

gridDiv.setAttribute("class", "grid");
document.body.appendChild(gridDiv);
/* <input type="text" id="newListItem" name="newListItem"></input>; */
var listItem = document.createElement("INPUT");
listItem.setAttribute("type", "text");
listItem.setAttribute("id", "newListItem");
gridDiv.appendChild(listItem);

/* <button class="btn" id="addBtn">submit</button> */

var AddButton = document.createElement("button");

AddButton.setAttribute("id", "btn");
AddButton.innerHTML = "submit";
gridDiv.appendChild(AddButton);

/* <output output ></output>; */
var outputList = document.createElement("OUTPUT");
// listItem.setAttribute("type", "text");
listItem.setAttribute("id", "outputList");
gridDiv.appendChild(outputList);

var outputArray = [];
// function firstTry() {

// when enter key is pressed in the text area
listItem.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addElement();
  }
});
// when the button is pressed
AddButton.addEventListener("click", addElement);
// appends all array items to page
function loopi() {
  for (i = 0; i < outputArray.length; i++) {
    var p = document.createElement("p");
    const outputElement = document.createElement("button");
    outputElement.setAttribute("id", "ListItem");

    p.setAttribute("class", "item");
    outputElement.innerHTML = outputArray[i];
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "x";
    outputElement.appendChild(deleteBtn);
    p.appendChild(outputElement);
    p.setAttribute("class", "item");
    deleteBtn.setAttribute("id", `delete${i}`);
    deleteBtn.addEventListener("click", deleteCurrent);
    outputList.appendChild(p);
    console.log(listItem.value);
  }

  listItem.value = "";
}
// adds to the outPut Array
function addElement() {
  if (listItem.value == "") {
    return;
  } else {
    outputArray.push(listItem.value);
    outputList.innerHTML = "";
    loopi();
  }
  // firstTry();
  update();
}

function deleteCurrent() {
  // deleteBtn.className var p = document.createElement("p");

  outputList.innerHTML = "";
  var selected = this.id.slice(6, 7);
  outputArray.splice(selected, 1);
  loopi();
}
