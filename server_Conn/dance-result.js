let danceTitleField = document.getElementById('danceresult-title');
let scoreField = document.getElementById('score');
let user_name = localStorage.getItem("userId");

document.addEventListener('DOMContentLoaded', function () {
    let danceTitle = danceTitleField.textContent;
    let score = scoreField.textContent;

    let userData = {
        user_name: user_name,
        content_name: danceTitle,
        content_number: score
    }


    axios.post('http://13.125.232.210:3001/content', userData)
        .then(response => {
            console.log('Registration successful:', response.data);
        })
        .catch(error => {
            console.error('Registration failed:', error.response.data);
        })

});
