
function ChangeForward() /*changes the image and text to the emblem*/
{
    var img = document.getElementById("Img");
    var txt = document.getElementById('ImgText')
    img.src="images/UNISA_Emblem2.png";
    img.alt='UNISA emblem';
    txt.innerText='attributions for UNISA emblem';
}



function ChangeBackward()/* changes the image and the text to a cmapus photo*/
{
    var img = document.getElementById("Img");
    var txt = document.getElementById('ImgText')
    img.src="images/MawsonLakesImg2.jpg";
    img.alt='Attributions for Mawson lakes campus photo'
    txt.innerText='attributions for UNISA Campus';
}

function ChangeTheme()/*toggles between themes*/
{
    /*const theme_toggle = document.getElementById('theme_toggle');*/
    var data_theme = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", data_theme === "light" ? "dark" : "light")


}

