const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// adding task to list
function addTask(){
    if(inputBox.value === ''){
        alert("please Enter a task✍️✍️");
    }
    else{
        let li = document.createElement("li"); // creating a list element
        li.innerHTML = inputBox.value // getting the input text of user using innerHtml
        listContainer.appendChild(li); // appending tht as list item

        //adding a cross at end of list element
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value =""; // clearing input field after every insertion
    saveData() // we are calling saveddata every time after any task & will save updated content
}

// for click function
listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked"); // if clicked on LI either it will be checked or unchecked
        saveData()
    }
    else if(e.target.tagName === "SPAN"){ // span is cross wala icon. so if clicked on that it will delete parent element i.e. list
        e.target.parentElement.remove();
        saveData()
    } // save data will be called for oth checking/unchekcing or deletion of data to update local storage
}, false)

//function to store data locally
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// function to display data whenever we refresh
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask(); // simply calling funtion evrytime