
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


function UserName(){

    const txt = document.getElementById('HeadText');


    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userName = urlParams.get('user_name');

    local_user_name = localStorage.getItem('LocalUserName');


    console.log('local user name ' + local_user_name);
    console.log('user name ' + userName)

    if (userName == null || userName == "")
    {

        if (local_user_name == "null" || local_user_name == null || local_user_name == "")
        {
            console.log('1')
            txt.innerText='My first year at UNISA';
        }

        else
        {
            console.log('2')
            txt.innerText= "Hello, " + local_user_name;
        }
    }

    else
    {
        console.log('3')
        txt.innerText= "Hello, " + userName;
        localStorage.setItem('LocalUserName', userName);
    }


}



function OnLoad(){
    const theme = localStorage.getItem("Theme");

    UserName()


    document.documentElement.setAttribute("data-theme",  theme)



}

/*window.onload = function() {UserName()} */
window.onload = OnLoad;