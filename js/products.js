function getRandomPrice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const products = [
    { name: 'car', img: 'car.png', price: getRandomPrice(25000, 25002) },
    { name: 'headphones', img: 'headphones.jpeg', price: getRandomPrice(50, 52) },
    { name: 'bike', img: 'bike.jpeg', price: getRandomPrice(500, 502) },
    { name: 'iPhone', img: 'iphone.avif', price: getRandomPrice(700, 702) },
    ];

function getRandomProduct() {
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
}
