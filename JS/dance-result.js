const params = new URLSearchParams(window.location.search);
const score = params.get('score');

// Display the score in the designated element
const scoreDisplay = document.getElementById('score-display');
if (scoreDisplay) {
    scoreDisplay.textContent = score ? `${score}점` : 'Score not found';
}