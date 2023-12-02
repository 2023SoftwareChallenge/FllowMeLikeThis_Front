document.addEventListener("DOMContentLoaded", function() {
    const buttonContainer = document.getElementById("nav-side-container");

    if(localStorage.getItem("userId")) {
        buttonContainer.remove();

        const userNameContainer = document.createElement('div');
        userNameContainer.id = 'userNameContainer';

        let userId = localStorage.getItem("userId");

        const newUserContainer = document.createElement('div');
        newUserContainer.id = 'userName';
        newUserContainer.innerHTML = userId+" 님 반갑습니다";
        newUserContainer.style.fontSize = "20px";
        newUserContainer.style.marginRight="250px";
        newUserContainer.style.color="#ffffff";

        userNameContainer.appendChild(newUserContainer);

        document.body.appendChild(userNameContainer);

        const parentContainer = document.getElementById('button-container');

        parentContainer.insertBefore(userNameContainer, parentContainer.firstChild);

    }
});
