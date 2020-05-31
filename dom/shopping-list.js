var myList = document.getElementById("my-list");
var inputItem = document.getElementById("item");
var items = function userItems () {
    var input = inputItem.value;
    alert(input);
}
var myButton = document.getElementById("button");
myButton.addEventListener('click', items);

