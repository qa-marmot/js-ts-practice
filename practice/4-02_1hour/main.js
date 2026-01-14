"use strict";
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const hour = now.getHours();
const min = now.getMinutes();
// now.setHours(13)
// const afterHour: number = now.getHours()
let amPm = hour < 12 ? 'a.m' : 'p.m';
const output = `${year}/${month + 1}/${date} ${hour % 12}:${min}${amPm}`;
document.getElementById("time").textContent = output;
export {};
//# sourceMappingURL=main.js.map