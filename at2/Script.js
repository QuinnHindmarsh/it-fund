
function ChangeForward() /*changes the image and text to the emblem*/
{
    var img = document.getElementById("Img");
    var txt = document.getElementById('ImgText')
    img.src="images/UNISACampusPhoto.jpg";
    img.alt='Photo of UNISA campus - but a different one';
    txt.innerText='File:UNISA Main Campus.jpg https://t.ly/lWrch';
}



function ChangeBackward()/* changes the image and the text to a cmapus photo*/
{
    var img = document.getElementById("Img");
    var txt = document.getElementById('ImgText')
    img.src="images/UNISACampus2.jpg";
    img.alt='Photo of UNISA campus'
    txt.innerText='File:UniSA Library, Adelaide, East view 20230207.jpg - Wikimedia Commons https://shorturl.at/jka10';
}

function ChangeTheme()/*toggles between themes*/
{

    var data_theme = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", data_theme === "light" ? "dark" : "light")

    localStorage.setItem("Theme", data_theme === "light" ? "dark" : "light");
    onload()


}

/*
function MakePass(){
    console.log('you are in the MakePass function')
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const NewPass = urlParams.get('NewPass')

    localStorage.setItem('Pass',NewPass)
}

function PassApply(){
    console.log('you are in the PassApply function')
    password = localStorage.getItem('Pass');

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const EnteredPass = urlParams.get('Pass')

    window.location  = 'ToDo.html';

    if (password === EnteredPass){
        alert('Password entered correctly')
        window.location  = 'ToDo.html';
    }
    else{
        alert('Password entered incorrectly, please try again')
    }


}

 */

function PassApply() {
    console.log('you are in the PassApply function')

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const EnteredPass = urlParams.get('Pass')

    if (EnteredPass == "Password"){
        alert("Password is entered correctly ")
        window.location  = 'ToDo.html'; /* this line works in the test function but not in this one, something else must be wrong but i cant work it out */
    }
    else {
        alert("Password is does not match, please try again. ")
    }


}

function test(){
    window.location  = 'ToDo.html';
}

function OnLoad(){
    const theme = localStorage.getItem("Theme");

    document.documentElement.setAttribute("data-theme",  theme)

}

window.onload = OnLoad;

/*window.onload = function() {UserName()} */
