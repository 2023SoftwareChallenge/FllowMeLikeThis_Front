document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const exerciseTitle = params.get('exerciseTitle');

    const exerciseNameElement = document.getElementById('exercise-name');
    if (exerciseNameElement) {
        exerciseNameElement.textContent = exerciseTitle || 'not found';
    }

    var totalSeconds = 90;

    function updateExerciseTime() {
        var minutes = Math.floor(totalSeconds / 60);
        var seconds = totalSeconds % 60;

        var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("exercise-time").textContent = formattedMinutes + ":" + formattedSeconds;
    }

    updateExerciseTime();

    var countdownTimer = setInterval(function () {
        totalSeconds--;

        updateExerciseTime();

        if (totalSeconds === 0) {
            clearInterval(countdownTimer);
        }
    }, 1000);
});