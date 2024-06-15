const InputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");


function AddTask(){
    const InputBox = document.getElementById("input-box");//value of the input box which is being uses
    const ListContainer = document.getElementById("list-container");//the list of what is in the to do list
    const ItemArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []; //local storage of the items


    if(InputBox.value === '' || InputBox == null || InputBox == 'null'){
        alert("input box must not be empty")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = InputBox.value;
        ListContainer.appendChild(li);

        ItemArray.append(InputBox.value);//adds to item array
        localStorage.setItem("items",JSON.stringify(ItemArray))//saves item to an array in local storage

        InputBox.value = "" // clears input box once you submit item
        let span = document.createElement("span");//creates a cross icon
        span.innerHTML = "  \u00d7";//cross icon
        li.appendChild(span);



    }

    console.log(ItemArray);

}


function LoadItems(){//this doesnt do anything as i had issues
    const ItemArray = localStorage.getItem("Items") ? JSON.parse(localStorage.getItem("Items")) : [];
    console.log(ItemArray);
    for (let i = 0; i < ItemArray.length; i++){

    }

}

//window.onload = LoadItems



/* a failed attempt at removing items
ListContainer.addEventListener("click", function (e) {
    console.log("1")
    if (e.target.tagName === "span") {
        console.log("2")
        e.target.parentElement.remove();

    }
}, false);
*/

