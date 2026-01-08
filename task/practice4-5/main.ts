"use strict";

/* ===== データ（2次元配列） ===== */

const data: number[][] = [
  [75, 55, 91, 50],        // 数学
  [80, 60, 71, 45, 60],   // 英語
  [53, 55, 78],           // 国語
];

const subjects = ["数学", "英語", "国語"];

/* ===== 計算系（number を返す） ===== */

// 合計点
const sum = (scores: number[]): number => {
  return scores.reduce((total, score) => total + score, 0);
};

// 平均点
const average = (scores: number[]): number => {
  return scores.length === 0 ? 0 : sum(scores) / scores.length;
};

// 受験者数
const testTakers = (scores: number[]): number => {
  return scores.length;
};

/* ===== 表示系 ===== */

const formatScore = (score: number): string => `${score}点`;
const formatPeople = (count: number): string => `${count}人`;

/* ===== 出力 ===== */

for (let i = 0; i < data.length; i++) {
  const scores = data[i];

  // noUncheckedIndexedAccess 対応（ここで保証）
  if (!scores) continue;

  console.log(`${subjects[i]}の合計点:`, formatScore(sum(scores)));
  console.log(`${subjects[i]}の平均点:`, formatScore(average(scores)));
  console.log(`${subjects[i]}の受験者数:`, formatPeople(testTakers(scores)));
  console.log("");
}
