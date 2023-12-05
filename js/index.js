const myGame = new Game();

// Lorsque l'utilisateur clique sur le bouton pour commencer le jeu
function startGame() {
    myGame.startGame();
}

// Lorsque l'utilisateur soumet une supposition
function submitGuess() {
    myGame.submitGuess();
}

// Vous pouvez également ajouter d'autres gestionnaires d'événements et fonctions en fonction de votre logique de jeu

// Par exemple, si vous avez un bouton "Rejouer" sur l'écran des résultats
function replayGame() {
    // Réinitialiser le jeu
    myGame.startScreen.style.display = 'block';
    myGame.resultScreen.style.display = 'none';
    myGame.startGame();
}

// Ajoutez des gestionnaires d'événements aux boutons dans votre HTML
document.getElementById('startBtn').addEventListener('click', startGame);
// document.getElementById('guessBtn').addEventListener('click', submitGuess);
// document.getElementById('replayBtn').addEventListener('click', replayGame);
