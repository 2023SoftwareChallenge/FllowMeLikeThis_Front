document.addEventListener("DOMContentLoaded", function() {
    const idInput = document.getElementById("id");
    const passwordInput = document.getElementById("pw");
    const passwordCheckInput = document.getElementById("pw-check");
    const nameInput = document.getElementById("name");
    const idLabel = document.getElementById("inputLabel");

    idInput.addEventListener("click", function() {
        if (idInput.value === "아이디") {
            idInput.value = "";
        }
    });

    idInput.addEventListener("blur", function() {
        if (idInput.value === "") {
            idInput.value = "아이디";
        }
        
        //아이디 유효성 검사
        let reg_id = /^[a-z0-9_-]{6,20}$/
        if(!reg_id.test(idInput.value)){
            idInput.style.outline ="1px solid #FF3B30";
            idLabel.style.color = "#FF3B30"
        }

        else {
            idInput.style.outline ="1px solid #34C759";
            idLabel.style.color = "#34C759" 
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