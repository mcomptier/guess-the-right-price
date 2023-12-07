function getRandomPrice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const products = [
    { name: 'a superb car', img: 'car.png', price: getRandomPrice(25000, 25002) },
    { name: 'the best headphones of the market', img: 'headphones.jpeg', price: getRandomPrice(50, 52) },
    { name: 'this amazing bike', img: 'bike.jpeg', price: getRandomPrice(500, 502) },
    { name: 'the last smarphone', img: 'iphone.avif', price: getRandomPrice(700, 702) },
    ];

    function getRandomProduct() {
        const guessedProducts = this.guessedProducts || [];
        const availableProducts = products.filter(product => !guessedProducts.includes(product));
        const randomIndex = Math.floor(Math.random() * availableProducts.length);
        return availableProducts[randomIndex];
    }
