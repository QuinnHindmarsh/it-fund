const InputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");

function AddTask(){
    const InputBox = document.getElementById("input-box");
    const ListContainer = document.getElementById("list-container");

    if(InputBox.value === '' || InputBox == null || InputBox == 'null'){
        alert("input box must not be empty")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = InputBox.value;
        ListContainer.appendChild(li);
        InputBox.value = "" // clears input box once you submit item
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";//cross icon
        li.appendChild(span);

    }
}


/*
ListContainer.addEventListener("click", function (e) {
    console.log("1")
    if (e.target.tagName === "span") {
        console.log("2")
        e.target.parentElement.remove();

    }
}, false);
*/