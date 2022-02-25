// Lets see what I can do:
var listItem = document.getElementById("newListItem");
const dbName = "ListArray";
var outputArray = [];
// function firstTry() {
var request = window.indexedDB.open(dbName);
// console.log(request);
var db;
// var btn = document.getElementById("btn");

request.onerror = function (event) {
  console.log("not good");
};

// var customerData = customerData.assign({}, outputArray);
const listArray = customerData;
console.log(customerData);
var customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];

request.onupgradeneeded = function (event) {
  db = event.target.result;
  const listArray = customerData;
  // = [
  //   { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  //   { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
  // ];
  var objectStore = db.createObjectStore("listArray", {
    keyPath: `ssn`,
  });

  // var transaction = event.target.transaction;
  // console.log(listArray);
  objectStore.transaction.oncomplete = function (event) {
    console.log(event);
    var listItemObjectStore = db
      .transaction("listArray", "readwrite")
      .objectStore("listArray");
    listArray.forEach(function (listItem) {
      listItemObjectStore.add(listItem);
    });
  };
};
// }
function update() {
  request.onupgradeneeded = function (event) {
    db = event.target.result;

    console.log("oh no");

    var transaction = db.transaction(["listArray"], "readwrite");
    var request = objectStore.get("444-44-4444");
    request.onerror = (event) => {
      // Handle errors!
      console.log("oh no");
    };
    request.onsuccess = (event) => {
      // Get the old value that we want to update
      var data = event.target.result;

      // update the value(s) in the object that you want to change
      data.age = 42;
      console.log("hooray");
      // Put this updated object back into the database.
      var requestUpdate = objectStore.put(data);
      requestUpdate.onerror = (event) => {
        // Do something with the error
      };
      requestUpdate.onsuccess = (event) => {
        // Success - the data is updated!
      };
    };
  };
}
// when enter key is pressed in the text area
listItem.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addElement();
  }
});
// when the button is pressed
addBtn.addEventListener("click", addElement);
// appends all array items to page
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
