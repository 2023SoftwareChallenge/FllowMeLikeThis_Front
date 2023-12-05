var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var date = now.getDate();
const monthsArray = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const datesContainerDiv = document.querySelectorAll(".dates.container")[0];

const setCalendar = (year, month) => {
    
    const titlemonthDiv = document.getElementsByClassName("month")[0];
    
    const monthName = monthsArray[month - 1];
    titlemonthDiv.innerHTML = `${monthName} ${year}`
    
    var firstDateDay = new Date(year, month - 1, 1).getDay(); 
    var lastDate = new Date(year, month, 0).getDate();

    datesContainerDiv.replaceChildren();

    for(let date=1; date<=lastDate; date++) {
        let dateItemDiv = document.createElement("div");
        dateItemDiv.classList.add("date");
        dateItemDiv.classList.add("item");
        dateItemDiv.innerHTML = date;
        
        datesContainerDiv.appendChild(dateItemDiv);

    }

    let firstDateDiv = datesContainerDiv.firstElementChild;
    firstDateDiv.style.gridColumnStart = firstDateDay + 1;

}
setCalendar(year, month);

const leftDiv = document.getElementsByClassName("left")[0];
leftDiv.onclick = () => {
    month--;
    if(month == 0) {
        year--;
        month = 12;
    }
    setCalendar(year, month);
}

const rightDiv = document.getElementsByClassName("right")[0];
rightDiv.onclick = () => {
    month++;
    if(month == 13) {
        year++;
        month = 1;
    }
    setCalendar(year, month);
}

const thismonthDiv = document.getElementsByClassName("month")[0];
thismonthDiv.onclick = () => {
    now = new Date();
    year = now.getFullYear();
    month = now.getMonth()+1;
    setCalendar(year, month);
}

let danceName = localStorage.getItem("danceName");
let score = localStorage.getItem("score");


let danceNameField = document.getElementById("score-box");
danceNameField.innerHTML = danceName+ " " + score+"점";
