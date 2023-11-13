document.addEventListener('DOMContentLoaded', function () {
    // URL 매개변수에서 값을 가져옵니다.
    const params = new URLSearchParams(window.location.search);
    const danceTitle = params.get('danceTitle');

    // dance-name 요소에 댄스 타이틀을 설정합니다.
    const danceNameElement = document.getElementById('dance-name');
    if (danceNameElement) {
        danceNameElement.textContent = danceTitle || 'not found';
    }
});