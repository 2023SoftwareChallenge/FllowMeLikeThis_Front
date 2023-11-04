document.addEventListener("DOMContentLoaded", function () {
    const idInput = document.getElementById("id");
    const passwordInput = document.getElementById("pw");
    const passwordCheckInput = document.getElementById("pw-check");
    const nameInput = document.getElementById("name");
    const idLabel = document.getElementById("inputLabel");
    const pwLabel = document.getElementById("pwLabel");
    const checkLabel = document.getElementById("checkLabel");

    sharedData = {
        checkArr : [false, false, false]
    };

    let checkArr = [false, false, false];

    idInput.addEventListener("click", function () {
        if (idInput.value === "아이디") {
            idInput.value = "";
        }
    });

    idInput.addEventListener("blur", function () {
        if (idInput.value === "") {
            idInput.value = "아이디";
        }

        //아이디 유효성 검사
        let reg_id = /^[0-9a-zA-Z]{6,20}$/;
        if (!reg_id.test(idInput.value)) {
            idInput.style.outline = "1px solid #FF3B30";
            idLabel.style.color = "#FF3B30"
            sharedData.checkArr[0] = false;
        }

        else {
            idInput.style.outline = "1px solid #34C759";
            idLabel.style.color = "#34C759"
            sharedData.checkArr[0] = true;
        }
    });

    passwordInput.addEventListener("click", function () {
        if (passwordInput.placeholder === "비밀번호") {
            passwordInput.placeholder = "";
        }
    });

    passwordInput.addEventListener("blur", function () {
        if (passwordInput.placeholder === "") {
            passwordInput.placeholder = "비밀번호";

            let reg_pw = /^(?=.*[0-9])(?=.*[a-z]|[A-Z])(?=.*[\W_])[0-9a-zA-Z\W_]{8,20}$/;
            if (!reg_pw.test(passwordInput.value)) {
                passwordInput.style.outline = "1px solid #FF3B30";
                pwLabel.style.color = "#FF3B30";
                sharedData.checkArr[1] = false;
            }
            else {
                passwordInput.style.outline = "1px solid #34C759";
                pwLabel.style.color = "#34C759"
                sharedData.checkArr[1] = true;
            }
        }
    });

    passwordCheckInput.addEventListener("click", function () {
        if (passwordCheckInput.placeholder === "비밀번호 확인") {
            passwordCheckInput.placeholder = "";
        }
    });

    passwordCheckInput.addEventListener("blur", function () {
        if (passwordCheckInput.placeholder === "") {
            passwordCheckInput.placeholder = "비밀번호 확인";

        }

        if (passwordInput.value !== passwordCheckInput.value) {
            passwordCheckInput.style.outline = "1px solid #34C759";
            checkLabel.style.color = "#34C759";
            checkLabel.textContent = "일치하지 않습니다"
            sharedData.checkArr[2] = false;
        }
        else {
            passwordCheckInput.style.outline = "1px solid #34C759";
            pwLabel.style.color = "#34C759";
            checkLabel.textContent = ""
            sharedData.checkArr[2] = true;
        }
    });

    nameInput.addEventListener("click", function () {
        if (nameInput.value === "닉네임") {
            nameInput.value = "";
        }
    });

    nameInput.addEventListener("blur", function () {
        if (nameInput.value === "") {
            nameInput.value = "닉네임";
        }
    });
});