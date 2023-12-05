const products = [
    { name: 'car', img: 'car.png' },
    { name: 'headphones', img: 'headphones.jpeg' },
    { name: 'bike', img: 'bike.jpeg' },
    { name: 'iPhone', img: 'iphone.avif' },
  ];
  
  function getRandomProduct() {
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
}
  