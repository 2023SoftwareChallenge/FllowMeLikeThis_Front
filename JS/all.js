document.addEventListener("DOMContentLoaded", function () {
    const buttonContainer = document.getElementById("nav-side-container");
    const parentContainer = document.getElementById('button-container');
    
    if (localStorage.getItem("userId")) {
        buttonContainer.remove();
        const userNameContainer = document.createElement('div');
        userNameContainer.id = 'userNameContainer';

        let userId = localStorage.getItem("userId");

        //로그아웃 버튼 추가
        const newLogoutContainer = document.createElement('div');
        newLogoutContainer.innerHTML = "LogOut";
        newLogoutContainer.style.width = "100px";
        newLogoutContainer.style.height = "30px";
        newLogoutContainer.style.backgroundColor="#ffffff";
        newLogoutContainer.style.marginRight = "70px";
        newLogoutContainer.style.textAlign = "center";
        newLogoutContainer.style.lineHeight = "30px";
        newLogoutContainer.style.borderRadius = "50px";
        newLogoutContainer.style.fontWeight = "bold";
        newLogoutContainer.style.fontSize = "1rem";
        newLogoutContainer.style.color = "#000000";
        newLogoutContainer.style.opacity = "0.5";
        newLogoutContainer.style.cursor = "pointer";

        userNameContainer.appendChild(newLogoutContainer);
        document.body.appendChild(newLogoutContainer);

        parentContainer.insertBefore(newLogoutContainer, parentContainer.firstChild);

        //name 추가
        const newUserContainer = document.createElement('div');
        newUserContainer.innerHTML = userId + " 님 반갑습니다";
        newUserContainer.style.fontSize = "16px";
        newUserContainer.style.marginRight = "70px";
        newUserContainer.style.color = "#ffffff";

        userNameContainer.appendChild(newUserContainer);
        document.body.appendChild(userNameContainer);

        parentContainer.insertBefore(userNameContainer, parentContainer.firstChild);

        newLogoutContainer.addEventListener("click", function(){
            localStorage.removeItem("userId");
            window.location.href="index.html"
        })

    }

});
