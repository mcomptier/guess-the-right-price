class Game {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.resultScreen = document.getElementById("game-results");
        this.timerElement = document.getElementById("time");
    }

    startGame() {
        // Initialiser le jeu
        this.currentProduct = getRandomProduct();
        this.displayProduct(this.currentProduct);
        this.startTimer();

        // Cacher l'écran d'introduction
        this.startScreen.style.display = 'none';

        // Afficher l'écran de jeu
        this.gameScreen.style.display = 'block';
    }

    displayProduct(product) {
        // Afficher l'image du produit sur l'interface
        const productImage = document.getElementById('productImage');
        productImage.src = `../guess-the-right-price/img/${product.img}`; // Adjust the path based on your folder structure
        productImage.alt = product.name;
    }

    submitGuess() {
        // Logique pour soumettre la supposition et obtenir le résultat
        const priceInput = document.getElementById('priceInput');
        const userGuess = parseInt(priceInput.value);

        // Reste du code pour la soumission de la supposition
    }

    startTimer() {
        // Logique pour démarrer le minuteur
        this.time = 600; // Définir la durée du minuteur en secondes

        this.timer = setInterval(() => {
            this.time--;

            // Mettre à jour l'interface utilisateur avec le temps restant
            this.timerElement.textContent = this.time;

            if (this.time <= 0) {
                // Le temps est écoulé, vous pouvez mettre en œuvre la logique de fin de jeu ici
                clearInterval(this.timer);
                this.endGame();
            }
        }, 1000); // Mettre à jour toutes les secondes
    }

    endGame() {
        // Logique de fin de jeu, par exemple, afficher les résultats
        this.gameScreen.style.display = 'none';
        this.resultScreen.style.display = 'block';
    }
}
