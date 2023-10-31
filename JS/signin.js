document.addEventListener("DOMContentLoaded", function() {
    const idInput = document.getElementById("id");
    const passwordInput = document.getElementById("pw");

    idInput.addEventListener("click", function() {
        if (idInput.value === "아이디 입력하기") {
            idInput.value = "";
        }
    });

    idInput.addEventListener("blur", function() {
        if (idInput.value === "") {
            idInput.value = "아이디 입력하기";
        }
    });

    passwordInput.addEventListener("click", function() {
        if (passwordInput.placeholder === "비밀번호 입력하기") {
            passwordInput.placeholder = "";
        }
    });

    passwordInput.addEventListener("blur", function() {
        if (passwordInput.placeholder === "") {
            passwordInput.placeholder = "비밀번호 입력하기";
        }
    });
});
