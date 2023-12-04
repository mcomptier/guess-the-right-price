const products = [
    { name: 'car', img: 'car.jpg' },
    { name: 'headphones', img: 'headphones.jpg' },
    { name: 'bike', img: 'bike.jpg' },
    { name: 'iPhone', img: 'iphone.jpg' },
  ];



let currentProduct; // Variable pour stocker le produit en cours de jeu
let timer; // Variable pour stocker le minuteur

function startGame() {
    // Initialiser le jeu
    currentProduct = getRandomProduct();
    displayProduct(currentProduct);
    startTimer();
}

function displayProduct(product) {
    // Afficher l'image du produit sur l'interface
    const productImage = document.getElementById('productImage');
    productImage.src = product.img;
    productImage.alt = product.name;
}

function submitGuess() {
    // Logique pour soumettre la supposition et obtenir le résultat
    // Mettez à jour l'interface utilisateur en conséquence

    // Par exemple, comparer la supposition avec le prix réel du produit
    // Afficher des indices au joueur (plus élevé, plus bas)
    // Mettre à jour le minuteur

    // À adapter selon la logique spécifique de votre jeu
}

function getRandomProduct() {
    // Renvoie un produit aléatoire depuis la liste de produits
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
}

function startTimer() {
    // Logique pour démarrer le minuteur
    // À adapter selon la logique spécifique de votre minuteur
}
