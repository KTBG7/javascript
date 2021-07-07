var myList = document.getElementById("my-list");
var inputItem = document.getElementById("item");
var myButton = document.getElementById("button");
myButton.addEventListener('click', function (){
    var input = inputItem.value;
    var listItem = document.createElement("LI");
    var itemSpan = document.createElement("span");
    var myButton2 = document.createElement("button");
    listItem.appendChild(itemSpan);
    listItem.appendChild(myButton2);
    var text = document.createTextNode(inputItem.value);
    itemSpan.appendChild(text);
    var buttonText = document.createTextNode("Delete");
    inputItem.value = '';
    myButton2.appendChild(buttonText);
    myButton2.addEventListener('click', function (){
        document.getElementById("my-list").removeChild(listItem);
    });
    document.getElementById("my-list").appendChild(listItem);
    document.getElementById("item").focus();
});

