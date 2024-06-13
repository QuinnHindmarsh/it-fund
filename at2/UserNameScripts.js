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

window.onload = OnLoad;