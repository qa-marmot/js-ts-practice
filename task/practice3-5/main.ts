"use strict";

let trapezoid = (top: number, bottom: number, height: number): number => {
  return ((top + bottom) * height) / 2;
};

console.log(trapezoid(10, 20, 30));
