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
var array3 = { _ListName: "l3", _array: [] };
var array4 = { _ListName: "l4", _array4: [] };
var array5 = { _ListName: "l5", _array5: [] };
var array6 = { _ListName: "l6", _array6: [] };
var array7 = { _ListName: "l7", _array7: [] };

// function firstTry() {

// when enter key is pressed in the text area
listItem.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addElement();
  }
});
// when the button is pressed
AddButton.addEventListener("click", addElement);
// Hopefully a class object will lead to less redundant code
// class List {
//   constructor(name, array) {
//     this.listName = name;
//     this.newArray = array;
//   }
// }
// var ListObject0 = new List(listName.value, []);
// var ListObject1 = new List(listName.value, outputArray);
// var ListObject2 = new List(listName.value, outputArray);
// var ListObject3 = new List(listName.value, outputArray);
// var ListObject4 = new List(listName.value, outputArray);
// var ListObject5 = new List(listName.value, outputArray);
// var ListObject6 = new List(listName.value, outputArray);

// class List {
// constructor(name, array) {
//   this.listName = name;
//   this.newArray = array;
// }

// function something(ListName) {
//   console.log(ListName);
//   ListName   = neweeeeeee
// }
//   // if (listName.value !== List.listName) {
//   // for (i = 0; i < 7; i++) {
//   //   if (listName.value !== `ListObject${[i]}`.listName) {
//   //     ListObject0.listName = listName.value;
//   //     ListObject0.newArray = outputArray;
//   //   }
//   // else if (listName.value !== ListObject1.listName) {
//   //   console.log("You finally made some progress");
//   //   // } else if (listName.value != ListObject2.listName) {
//   //   // } else if (listName.value != ListObject3.listName) {
//   //   // } else if (listName.value != ListObject4.listName) {
//   //   // } else if (listName.value != ListObject6.listName) {
//   //   // } else if (listName.value != ListObject7.listName) {
//   // }
//   // console.log(ListObject0);
//   // console.log(`ListObject${[i]}`.listName);
//   // }
// }
// appends all array items to page
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
      outputElement.innerHTML = eval(`array${j}`)._array[i];
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
      console.log(array1, array2);
    }
  }
}
// adds to the outPut Array
function addElement() {
  console.log(listName.value);

  if (listName.value == array1._ListName || array1._ListName == "1") {
    array1._ListName = listName.value;
    array1._array.push(listItem.value);
    console.log(listItem.value);
    outputList.innerHTML = "";
    listName.innerHTML = "";
    loopInterface(array1._ListName);
    console.log("1");
    console.log(array1._ListName);
  } else if (listName.value == array2._ListName || array2._ListName == "2") {
    array2._array.push(listItem.value);
    loopInterface();
    console.log("2");
  } else {
    array1 = { _ListName: listName.value, _array: [] };

    console.log(array1);

    array1._array.push(listItem.value);
    console.log(listItem.value);
    outputList.innerHTML = "";
    listName.innerHTML = "";
    loopInterface(array1._ListName);
    console.log("3");
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
