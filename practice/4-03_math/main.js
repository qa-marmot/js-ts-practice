"use strict";
document.getElementById("pi").textContent = String(Math.PI);
document.getElementById("floor").textContent = String(Math.floor(Math.PI));
const point = (num, digit) => {
    const mover = 10 ** digit;
    return Math.floor(num * mover) / mover;
};
document.getElementById("output").textContent = String(point(Math.PI, 2));
export {};
//# sourceMappingURL=main.js.map