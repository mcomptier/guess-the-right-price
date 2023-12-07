class Game {
    constructor() {
        this.startScreen = document.getElementById("game-intro");
        this.gameScreen = document.getElementById("game-screen");
        this.resultScreen = document.getElementById("game-results");
        this.timerElement = document.getElementById('timer-container');
        this.timePassed = 0; 
        this.timerInterval = null; // Stocker l'ID de l'intervalle du minuteur
        this.userGuess = null;
        this.trials = 1; 
        this.guessedProducts = [];
        document.getElementById('submitBtn').addEventListener('click', () => this.checkAndSubmitGuess());

    }


    
    startGame() {
        // Début du jeu avec un produit aléaltoir
        this.currentProduct = getRandomProduct();
        this.displayProduct(this.currentProduct);
        this.startTimer();

        // Cacher l'écran d'introduction
        this.startScreen.style.display = 'none';

        // Afficher l'écran de jeu
        this.gameScreen.style.display = 'block';
    }

    replayGame() {
        // Réinitialiser les propriétés du jeu pour une nouvelle partie
        console.log('Replaying game...');
        this.trials = 1;
        this.timePassed = 0;
        
        if (this.guessedProducts.length === products.length) {
            this.endGame("Congrats ! You guess all products.");
            return;
        }
        // Redémarrer le jeu avec un nouveau produit
        this.currentProduct = getRandomProduct();
        this.displayProduct(this.currentProduct);
        this.startTimer();

        // Cacher l'écran des résultats et afficher l'écran du jeu
        this.resultScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';
    }

    displayProduct(product) {
    // Récupère l'élément d'image dans le document par son ID
         const productImage = document.getElementById('productImage');
     // Modifie la source (src) de l'image pour correspondre à celle du produit actuel
        productImage.src = `../guess-the-right-price/img/${product.img}`;
    // Modifie le texte alternatif (alt) de l'image 

        productImage.alt = product.name;
    }
    static getGuessedProducts() {
        return this.guessedProducts || [];
    }

    checkAndSubmitGuess() {
        // Récupérer la valeur entrée par l'utilisateur
        const priceInput = document.getElementById('priceInput');
        const userGuess = parseInt(priceInput.value);
    
        // Comparer la valeur à la réponse correcte
        const correctPrice = this.currentProduct.price;
    
        if (userGuess < correctPrice) {
            this.displayGuessResult(userGuess, 'more', 'red');
        } else if (userGuess > correctPrice) {
            this.displayGuessResult(userGuess, 'less', 'orange');
        } else {
            this.guessedProducts.push(this.currentProduct);
            this.displayGuessResult(userGuess, 'correct', 'green');
            this.updateRewardsList()
            this.replayGame()
            const correctSound = new Audio('../guess-the-right-price/sounds/bipbip.wav');
            correctSound.play();
        }
        this.updateRewardsList(); 

    }
    

    displayGuessResult(userGuess, className, backgroundColor) {
        const instructionContainer = document.getElementById('result-container');
       
         // Ajouter le nombre d'instruction à afficher
        while (instructionContainer.children.length >= 6) {
            instructionContainer.removeChild(instructionContainer.firstChild);
        }
        const instruction = document.createElement('p');
        instruction.className = 'instruction';
        instruction.classList.add(className);

        instruction.innerHTML = `#${this.trials} (${userGuess})... it's  ${className}!  `;
        instruction.style.backgroundColor = backgroundColor;      
         this.trials++;

        // Ajouter l'instruction au conteneur
        instructionContainer.appendChild(instruction);
    }

      showResult(message) {
        // Mettre à jour l'élément d'affichage du résultat avec le message fourni
        const resultContainer = document.getElementById('result-container');
        resultContainer.innerHTML = `<p>${message}</p>`;
      }

    startTimer() {
        // Utiliser clearInterval pour éviter les conflits avec les appels précédents à setInterval
        clearInterval(this.timerInterval);

        // Utiliser setInterval pour appeler la fonction update chaque seconde
        this.timerInterval = setInterval(() => this.updateTimer(), 1000);

        this.initializeTimer();
    }
    initializeTimer() {
        this.time = 60; 
        this.timerElement.innerHTML = `
            <div class="label"></div>
        `;
        this.updateTimerDisplay();

    }

    updateTimerDisplay() {
        const remainingTime = this.time - this.timePassed;
        const label = document.querySelector('.label');
      
        label.textContent = remainingTime;

        if (remainingTime < 10) {
            label.style.color = 'red';
        } else {
            label.style.color = 'rgb(34, 213, 201)';
           
        }
    }

    updateTimer() {
        if (this.timePassed < this.time) {
            this.timePassed++;
            this.updateTimerDisplay();
        } else {
            this.endGame();
        }
    }
    updateRewardsList() {
        const rewardsList = document.getElementById('rewardsList');

        // Effacer la liste actuelle
        rewardsList.innerHTML = '';

        // Ajouter les produits correctement devinés à la liste
        this.guessedProducts.forEach(product => {
            console.log(product);
            const listItem = document.createElement('li');
            const productImage = document.createElement('img');
            productImage.src = `../guess-the-right-price/img/${product.img}`;
            productImage.alt = product.name;
            listItem.appendChild(productImage);
            listItem.appendChild(document.createTextNode(product.name));
            rewardsList.appendChild(listItem);
        });
    }

    endGame() {
        // Logique de fin de jeu, par exemple, afficher les résultats
        this.gameScreen.style.display = 'none';
        this.resultScreen.style.display = 'block';

        // Arrêtez le minuteur
        clearInterval(this.timerInterval);
        const EndSound = new Audio('../guess-the-right-price/sounds/Applause.wav');
        EndSound.play();
    }


    
}

window.Game = Game;
