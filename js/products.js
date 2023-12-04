

function getRandomProduct() {
    const productKeys = Object.keys(products);
    const randomKey = productKeys[Math.floor(Math.random() * productKeys.length)];
    return products[randomKey];
}