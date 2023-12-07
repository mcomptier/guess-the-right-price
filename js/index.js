const myGame = new Game();

window.startGame = function() {
    myGame.startGame();
};

window.toggleSound = function() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    const musicBtn = document.querySelector('.musicbtn');

    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicBtn.textContent = 'Sound: On';
    } else {
        backgroundMusic.pause();
        musicBtn.textContent = 'Sound:  Off';
    }
}
document.getElementById('startBtn').addEventListener('click', startGame);
