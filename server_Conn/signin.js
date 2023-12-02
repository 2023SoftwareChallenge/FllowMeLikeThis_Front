const idField = document.getElementById('id');
const pwField = document.getElementById('pw');
const submitBtn = document.getElementById('submit');

submitBtn.onclick = () => {
    let id = idField.value;
    let pw = pwField.value;
    
    let userData = {
        user_id : id,
        user_pw : pw
    }

    axios.post('http://13.125.232.210:3001/login', userData)
    .then(response => {
        console.log('Registration successful:', response.data);
        window.location.href='index.html';
    })
    .catch(error => {
        if(error.response.status === 404){
            alert('아이디 혹은 회원가입이 일치하지 않습니다')
        }
        else {
            console.error('Registration failed:', error.response.data);   
        }
    })
    
}