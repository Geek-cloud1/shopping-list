var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var h1 = document.querySelector("h1");
var ul = document.querySelector("ul");
var pa = document.getElementById("message");

// var h1 = document.querySelector("h1");
// h1.className = "cool";

// var li = document.querySelector("li");
// li.className = "cool";

// funtion to check input length

function inputLength() {
    return input.value.length;
}

// function to create list item
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);    
    input.value = "";
}


button.addEventListener("click", function(){
    if (inputLength() > 0) {
    createListElement();
    pa.innerHTML = ("Great job! You added an item");
    pa.className= ("green")
    }  
    else {
        pa.innerHTML = ("please enter an item");
        pa.className= ("red")
    }             
})
// using the keyboard enter key to access it


input.addEventListener("keypress", function(KeyboardEvent){
    if (inputLength() > 0 && KeyboardEvent.keyCode === 13) {
        createListElement();
        pa.innerHTML = ("Great job! You added an item");
        pa.className= ("green");
    }   
    else {
        pa.innerHTML = ("please enter an item");
        pa.className= ("red")
    }           
})

function checkTyping() {
    if (inputLength() > 0) {
        pa.innerHTML = ("Typing...")
        pa.className = ("black")
    }
    else if (inputLength() ===0){
        pa.innerHTML = ("")
    }
}
