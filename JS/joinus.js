document.addEventListener("DOMContentLoaded", function() {
    const idInput = document.getElementById("id");
    const passwordInput = document.getElementById("pw");
    const passwordCheckInput = document.getElementById("pw-check");
    const nameInput = document.getElementById("name");

    idInput.addEventListener("click", function() {
        if (idInput.value === "아이디") {
            idInput.value = "";
        }
    });

    idInput.addEventListener("blur", function() {
        if (idInput.value === "") {
            idInput.value = "아이디";
        }
    });

    passwordInput.addEventListener("click", function() {
        if (passwordInput.placeholder === "비밀번호") {
            passwordInput.placeholder = "";
        }
    });

    passwordInput.addEventListener("blur", function() {
        if (passwordInput.placeholder === "") {
            passwordInput.placeholder = "비밀번호";
        }
    });

    passwordCheckInput.addEventListener("click", function() {
        if (passwordCheckInput.placeholder === "비밀번호 확인") {
            passwordCheckInput.placeholder = "";
        }
    });

    passwordCheckInput.addEventListener("blur", function() {
        if (passwordCheckInput.placeholder === "") {
            passwordCheckInput.placeholder = "비밀번호 확인";
        }
    });

    nameInput.addEventListener("click", function() {
        if (nameInput.value === "닉네임") {
            nameInput.value = "";
        }
    });

    nameInput.addEventListener("blur", function() {
        if (nameInput.value === "") {
            nameInput.value = "닉네임";
        }
    });
});