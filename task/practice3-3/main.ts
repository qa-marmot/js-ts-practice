"use strict";

let getParity = (num: number): void => {
  if (num % 2 === 0) {
    console.log("偶数");
  } else {
    console.log("奇数");
  }
};

for (let i = 1; i <= 10; i++) {
  console.log(i);
  getParity(i);
}
