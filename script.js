// Задача 1

console.log("Задача 1");

const nums = [5, 2, 4];
squares = [];
nums[99] = 3;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== undefined) {
    squares.push(nums[i] ** 2);
  }
}
console.log("squares:", squares);

// Задача 2
console.log("\nЗадача 2");

const list = [
  { product: "Apple", price: 25 },
  { product: "Cherry", price: 32 },
  { product: "Strawberry", price: 45 },
];

let maxProductPrice = 0;
let productName = "";

for (let i = 0; i < list.length; i++) {
  if (list[i].price > maxProductPrice) {
    maxProductPrice = list[i].price;
    productName = list[i].product;
  }
}

console.log(productName);

// Задача 3
console.log("\nЗадача 3");

const products = [
  "apple",
  "cherry",
  "strawberry",
  "pineapple",
  "pear",
  "orange",
  "grape",
  "peach",
  "banana",
  "lemon",
];
let basket = [];

const getRandomInRange = (min = 10, max = 30) => {
  return Math.floor(min + Math.random() * (max - min + 1));
};
const productsCount = getRandomInRange(10, 30);
let randomIndexProduct = getRandomInRange(0, products.length - 1);
let findedIndexProduct = "";
let productPrice = getRandomInRange(5, 70);
let totalSumProducts = 0;
for (let i = 0; i < productsCount; i++) {
  findedIndexProduct = basket.findIndex(
    (item) => item.product === products[randomIndexProduct]
  );
  if (findedIndexProduct != -1) {
    basket[findedIndexProduct].cnt += 1;
  } else {
    basket.push({
      product: products[randomIndexProduct],
      price: productPrice,
      cnt: 1,
    });
    productPrice = getRandomInRange(5, 70);
  }
  randomIndexProduct = getRandomInRange(0, products.length - 1);
}

totalSumProducts = basket.reduce((acc, item) => {
  acc = acc + item.price * item.cnt;
  return acc;
}, 0);
console.log("Корзина:", basket);
console.log("Общая сумма товаров корзины:", totalSumProducts);