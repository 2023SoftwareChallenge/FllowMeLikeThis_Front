function redirectToDanceTest(exerciseTitle) {
    window.location.href = `./exercise-test.html?exerciseTitle=${encodeURIComponent(exerciseTitle)}` + '운동';
}