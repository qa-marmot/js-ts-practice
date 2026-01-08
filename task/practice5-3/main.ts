"use strict";

interface Capital {
  [key: string]: string | number;
}

const favorites: Capital = {
  food: "カレーライス",
  color: "青",
  number: 7,
  sports: "baseball",
};

for (let i in favorites) {
  if (i === "color" || i === "number") {
    console.log(`${favorites[i]}`);
  } else {}
}
