// Lets see what I can do:
const array = "array";

/* <input type="text" id="listName" name="listName"></input>; */
var listName = document.createElement("INPUT");
listName.setAttribute("type", "text");
listName.setAttribute("id", "newListName");
document.body.appendChild(listName);
var ListName = listName.value;
/* <input type="text" id="newListItem" name="newListItem"></input>; */
var listItem = document.createElement("INPUT");
listItem.setAttribute("type", "text");
listItem.setAttribute("id", "newListItem");
document.body.appendChild(listItem);

/* <button class="btn" id="addBtn">submit</button> */

var AddButton = document.createElement("button");

AddButton.setAttribute("id", "btn");
AddButton.innerHTML = "submit";
document.body.appendChild(AddButton);

// gridDiv keeps nested elements from rendering after list output
var gridDiv = document.createElement("div");
gridDiv.setAttribute("class", "grid");
document.body.appendChild(gridDiv);
/* <output output ></output>; */
// var outputList = document.createElement("OUTPUT");
// // listItem.setAttribute("type", "text");
// listItem.setAttribute("id", "outputList");
// gridDiv.appendChild(outputList);

var array1 = { _ListName: "1", _array: [] };

var array2 = { _ListName: "2", _array: [] };
var array3 = { _ListName: "3", _array: [] };
var array4 = { _ListName: "4", _array: [] };
var array5 = { _ListName: "5", _array: [] };
var array6 = { _ListName: "6", _array: [] };
var array7 = { _ListName: "7", _array: [] };
var A = 1;

// when enter key is pressed in the text area
listItem.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addElement();
  }
});
// when the button is pressed
AddButton.addEventListener("click", addElement);
// Creation of DOM elements
function loopInterface() {
  gridDiv.innerHTML = "";
  for (j = 1; j < A; j++) {
    var column = document.createElement("column");
    column.setAttribute("class", `column${j}`);
    gridDiv.appendChild(column);
    let arrayJ = eval(`array${j}`);
    console.log(arrayJ);
    var t = document.createElement("h3");
    t.setAttribute("class", "listedName");
    gridDiv.appendChild(column);
    t.innerHTML = arrayJ._ListName;
    for (i = 0; i < arrayJ._array.length; i++) {
      var li = document.createElement("li");
      console.log(column);
      const outputElement = document.createElement("button");
      outputElement.setAttribute("id", "ListItem");
      var ul = document.createElement("ul");
      li.setAttribute("class", "item");
      outputElement.innerHTML = eval(`array${j}`)._array[i];
      var deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "x";
      outputElement.appendChild(deleteBtn);
      li.appendChild(outputElement);
      li.setAttribute("class", "item");
      deleteBtn.setAttribute("id", `delete${i}`);
      deleteBtn.setAttribute("class", `array${j}`);
      deleteBtn.addEventListener("click", deleteCurrent);
      ul.appendChild(li);
      t.appendChild(ul);
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
  } else if (listName.value == array1._ListName) {
    array1._array.push(listItem.value);

    listName.innerHTML = "";
    loopInterface();
  } else if (listName.value == array2._ListName) {
    array2._array.push(listItem.value);

    listName.innerHTML = "";
    loopInterface();
  } else if (listName.value == array3._ListName) {
    array3._array.push(listItem.value);

    listName.innerHTML = "";
    loopInterface();
  } else if (listName.value == array4._ListName) {
    array4._array.push(listItem.value);

    listName.innerHTML = "";
    loopInterface();
  } else if (listName.value == array5._ListName) {
    array5._array.push(listItem.value);

    listName.innerHTML = "";
    loopInterface();
  } else if (listName.value == array6._ListName) {
    array6._array.push(listItem.value);

    listName.innerHTML = "";
    loopInterface();
  } else if (listName.value == array7._ListName) {
    array7._array.push(listItem.value);

    listName.innerHTML = "";
    loopInterface();
  } else {
    console.log("else statement!");

    array1._array.push(listItem.value);

    listName.innerHTML = "";
    loopInterface(array1._ListName);
    // something();
  }
  // firstTry();
}
function deleteCurrent() {
  // deleteBtn.className var p = document.createElement("p");

  let deleteColumn = Function("return " + this.className)();
  //.innerHTML = "";
  var selected = this.id.slice(6, 7);
  console.log(selected);
  deleteColumn._array.splice(selected, 1);
  loopInterface();
}
