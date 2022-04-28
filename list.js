// Lets see what I can do:
const array = "array";
// gridDiv keeps nested elements from rendering after list output
var gridDiv = document.createElement("div");
gridDiv.setAttribute("class", "grid");
document.body.appendChild(gridDiv);

/* <input type="text" id="listName" name="listName"></input>; */
var listName = document.createElement("INPUT");
listName.setAttribute("type", "text");
listName.setAttribute("id", "newListName");
gridDiv.appendChild(listName);
var ListName = listName.value;
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

var array1 = { _ListName: "1", _array: [] };

var array2 = { _ListName: "2", _array: [] };
var array3 = { _ListName: "3", _array: [] };
var array4 = { _ListName: "4", _array: [] };
var array5 = { _ListName: "5", _array: [] };
var array6 = { _ListName: "6", _array: [] };
var array7 = { _ListName: "7", _array: [] };
var A = 1;
// function firstTry() {

// when enter key is pressed in the text area
listItem.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addElement();
  }
});
// when the button is pressed
AddButton.addEventListener("click", addElement);

function loopInterface() {
  for (j = 1; j < 2; j++) {
    var column = document.createElement("div");
    column.setAttribute("class", `column${j}`);
    document.body.appendChild(column);
    console.log(array1);
    let arrayJ = eval(`array${j}`);
    console.log(arrayJ);
    var t = document.createElement("h4");
    outputList.appendChild(column);
    t.innerHTML = listName.value;
    for (i = 0; i < arrayJ._array.length; i++) {
      var p = document.createElement("p");
      console.log(column);
      const outputElement = document.createElement("button");
      outputElement.setAttribute("id", "ListItem");

      p.setAttribute("class", "item");
      console.log(eval(`array${j}`));
      outputElement.innerHTML = eval(`array${j}`)._array;
      var deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "x";
      outputElement.appendChild(deleteBtn);
      p.appendChild(outputElement);
      p.setAttribute("class", "item");
      deleteBtn.setAttribute("id", `delete${i}`);
      deleteBtn.addEventListener("click", deleteCurrent);
      // var columnJ = document.getElementsByClassName(`column${j}`);
      t.appendChild(p);
      column.appendChild(t);
      listItem.value = "";
      console.log(array1, array2, array3, array4, array5, array6, array7);
    }
  }
}
// adds to the outPut Array

function addElement() {
  console.log(listItem.value);
  if (
    listName.value !== array1._ListName &&
    listName.value !== array2._ListName &&
    listName.value !== array3._ListName &&
    listName.value !== array4._ListName &&
    listName.value !== array5._ListName &&
    listName.value !== array6._ListName &&
    listName.value !== array7._ListName
  ) {
    var ArrayA = `array${A}`;
    window[ArrayA]._ListName = listName.value;
    window[ArrayA]._array.push(listItem.value);
    A++;
    loopInterface();
    console.log("1");
  } else if (listName.value == array1._ListName) {
    array1._array.push(listItem.value);
    console.log(listItem.value);
    outputList.innerHTML = "";
    listName.innerHTML = "";
    loopInterface();
    console.log("2");
    console.log(array1._ListName);
  } else if (listName.value == array2._ListName) {
    array2._array.push(listItem.value);
    console.log(listItem.value);
    outputList.innerHTML = "";
    listName.innerHTML = "";
    loopInterface();
    console.log("3");
  } else if (listName.value == array3._ListName) {
    array3._array.push(listItem.value);
    console.log(listItem.value);
    outputList.innerHTML = "";
    listName.innerHTML = "";
    loopInterface();
    console.log("3");
  } else if (listName.value == array4._ListName) {
    array4._array.push(listItem.value);
    console.log(listItem.value);
    outputList.innerHTML = "";
    listName.innerHTML = "";
    loopInterface();
    console.log("3");
  } else if (listName.value == array5._ListName) {
    array5._array.push(listItem.value);
    console.log(listItem.value);
    outputList.innerHTML = "";
    listName.innerHTML = "";
    loopInterface();
    console.log("3");
  } else if (listName.value == array6._ListName) {
    array6._array.push(listItem.value);
    console.log(listItem.value);
    outputList.innerHTML = "";
    listName.innerHTML = "";
    loopInterface();
    console.log("3");
  } else if (listName.value == array7._ListName) {
    array7._array.push(listItem.value);
    console.log(listItem.value);
    outputList.innerHTML = "";
    listName.innerHTML = "";
    loopInterface();
    console.log("3");
  } else {
    console.log("bitch");

    array1._array.push(listItem.value);
    console.log(listItem.value);
    outputList.innerHTML = "";
    listName.innerHTML = "";
    loopInterface(array1._ListName);
    console.log("4");
    console.log(array1._ListName);
    // something();
  }
  // firstTry();
}
function deleteCurrent() {
  // deleteBtn.className var p = document.createElement("p");

  outputList.innerHTML = "";
  var selected = this.id.slice(6, 7);
  outputArray.splice(selected, 1);
  loopInterface();
}
