function redirectToDanceTest(danceTitle) {
    window.location.href = `./dance-test.html?danceTitle=${encodeURIComponent(danceTitle)}`;
}