"use strict";

interface Book {
  title: string;
  price: number;
  stock: number;
  [key: string]: any;
}

let jsBook: Book = { title: "JavaScript入門", price: 2500, stock: 3 };
// console.log(jsBook);
// console.log(jsBook.title);
// console.log(jsBook["price"]);
// jsBook.stock = 10;
// console.log(jsBook.stock);

// for (let p in jsBook) {
//   console.log(p + "=" + jsBook[p]);
// }

const titleElement = document.getElementById("title");
if (titleElement) titleElement.textContent = jsBook.title;

const priceElement = document.getElementById("price");
if (priceElement) priceElement.textContent = jsBook.price + "円";

const stockElement = document.getElementById("stock");
if (stockElement) stockElement.textContent = jsBook.stock.toString();
