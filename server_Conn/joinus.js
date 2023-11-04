const idField = document.getElementById('id');
const pwField = document.getElementById('pw');
const checkField = document.getElementById('pw-check');
const nameField = document.getElementById('name');
const submitBtn = document.getElementById('submit');

submitBtn.onclick = () => {
    let id = idField.value;
    let pw = pwField.value;
    let pwCheck = checkField.value;
    let name = nameField.value;

    console.log(sharedData.checkArr)
    console.log(sharedData.checkArr.includes(0))
    if (pw === pwCheck && !sharedData.checkArr.includes(false)) {

        let userData = {
            user_id: id,
            user_pw: pw,
            user_name: name
        }

        axios.post('http://localhost:3000/user', userData)
            .then(response => {
                console.log('Registration successful:', response.data);
                // window.location.href = 'signin.html';
            })
            .catch(error => {
                if(error.response.status === 404){
                    alert('중복된 아이디 값이 있습니다')
                }
                else {
                    console.error('Registration failed:', error.response.data);
                }
            })
    }

    else {
        alert('뺄래릭')
    }

}