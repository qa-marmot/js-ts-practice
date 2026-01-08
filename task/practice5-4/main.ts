"use strict";

interface Score {
  [key: string]: number[];
}

const score: Score = {
  鈴木: [75, 80],
  佐藤: [55, 60],
  田中: [91, 71],
  渡辺: [50, 45],
  近藤: [60, 60],
};

for (let i in score) {
  const subjects = score[i];
    console.log(
      `${i}さんは数学:${subjects[0]}点、英語${subjects[1]}点で2教科の合計は${
        subjects[0] + subjects[1]
      }点です。`
    );
}
