"use strict";

const score: number[] = [ 100, 50, 80, 75, 91 ];

for (let i of score) {
  let num: number = 1;
  if (i >= 90 && i <= 100){
    console.log(`${num}人目の点数は${i}点で評価はAです`)
  }else if (i >= 80 && i < 90) {
    console.log(`${num}人目の点数は${i}点で評価はBです`)
  }else if (i >= 70 && i < 80) {
    console.log(`${num}人目の点数は${i}点で評価はCです`)
  }else if (i >= 0 && i < 70) {
    console.log(`${num}人目の点数は${i}点で評価はDです`)
  }
  num++
}

