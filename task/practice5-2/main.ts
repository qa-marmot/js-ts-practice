"use strict";

interface Favorites {
  [key: string]: string | number;
}

const favorites: Favorites = {
  food: "カレーライス",
  color: "青",
  number: 7,
  sports: "baseball",
};

for (let i in favorites) {
  if (i === "sports") {
    console.log(`${favorites[i]}`);
  }
}
