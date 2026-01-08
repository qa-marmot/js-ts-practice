"use strict";

const data: string[][] = [
  ["JavaScript", "PHP", "Python"],
  ["MySQL", "PostgreSQL", "SQLite"],
  ["Windows", "Mac", "Linux"],
];

const score = data[0]?.[2];

if (score !== undefined) {
  console.log(score); 
} else {
  console.log("スコアが存在しません");
}

