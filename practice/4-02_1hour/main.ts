"use strict";

const now: Date = new Date();
const year: number = now.getFullYear();
const month: number = now.getMonth();
const date: number = now.getDate();
const hour: number = now.getHours();
const min: number = now.getMinutes();
// now.setHours(13)
// const afterHour: number = now.getHours()

let amPm: string = hour < 12 ? 'a.m' : 'p.m'

const output: string = `${year}/${month + 1}/${date} ${hour % 12}:${min}${amPm}`;
document.getElementById("time").textContent = output;
