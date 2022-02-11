// Lets see what I can do:
var listItem = document.getElementById("newListItem");
const dbName = "ListArray";
var request = window.indexedDB.open(dbName);
// console.log(request);
var db;
// var btn = document.getElementById("btn");
// var deleteBtn = document.getElementById("deleteBtn");
request.onerror = function (event) {
  console.log("not good");
};

var outputArray = [];
var customerData = outputArray;
const listArray = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
];

request.onupgradeneeded = function (event) {
  db = event.target.result;

  const listArray = [
    { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
    { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" },
  ];
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
    var transaction = db.transaction(["listArray"], "readwrite");
  };
};
addBtn.addEventListener("click", addElement);
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
  }

  listItem.value = "";
}
function addElement() {
  outputArray.push(listItem.value);
  outputList.innerHTML = "";
  loopi();
}

function deleteCurrent() {
  // deleteBtn.className var p = document.createElement("p");

  outputList.innerHTML = "";
  var who = this.id.slice(6, 7);
  outputArray.splice(who, 1);
  loopi();
}
