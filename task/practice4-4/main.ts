"use strict";

const data: number[][] = [
  [75, 55, 91, 50, 60],
  [80, 60, 71, 45, 60],
];

// 合計を求める関数
const sum = (num: number[] | undefined): number => {
  if (num === undefined) return 0;
  let sumScore: number = 0;
  for (const i of num) {
    sumScore += i;
  }
  return sumScore;
};

// 平均を求める関数
const average = (num: number[] | undefined): number => {
  if (num === undefined) return 0;
  if (num.length === 0) return 0;

  const sumScore = sum(num);
  const averageScore = sumScore / num.length;
  return averageScore;
};

console.log("数学の合計点:", sum(data[0]));
console.log("数学の平均点:", average(data[0]));
console.log("英語の合計点:", sum(data[1]));
console.log("英語の平均点:", average(data[1]));
