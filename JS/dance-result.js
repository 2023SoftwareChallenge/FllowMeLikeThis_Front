document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the danceTitle and score from the URL
    const params = new URLSearchParams(window.location.search);
    const danceName = localStorage.getItem('danceName');
    const score = params.get('score');

    // Display the score in the #score-display element
    const scoreDisplay = document.getElementById('score-display');
    if (scoreDisplay) {
        scoreDisplay.textContent = score ? `${score}점` : 'Score not found';
    }

    // Display dance-name in the #result-title element
    const resultTitleElement = document.getElementById('result-title');
    if (resultTitleElement) {
        resultTitleElement.textContent = danceName || 'Dance Result';
    }

    // Clear the danceName from localStorage to avoid using old values in subsequent visits
    localStorage.removeItem('danceName');
});