const signInBtn = document.getElementById("signInBtn");

if(localStorage.getItem("userId")){
    signInBtn.remove();
}