"use strict";
/* ===== データ（2次元配列） ===== */
var data = [
    [75, 55, 91, 50], // 数学
    [80, 60, 71, 45, 60], // 英語
    [53, 55, 78], // 国語
];
var subjects = ["数学", "英語", "国語"];
/* ===== 計算系（number を返す） ===== */
// 合計点
var sum = function (scores) {
    return scores.reduce(function (total, score) { return total + score; }, 0);
};
// 平均点
var average = function (scores) {
    return scores.length === 0 ? 0 : sum(scores) / scores.length;
};
// 受験者数
var testTakers = function (scores) {
    return scores.length;
};
/* ===== 表示系 ===== */
var formatScore = function (score) { return "".concat(score, "\u70B9"); };
var formatPeople = function (count) { return "".concat(count, "\u4EBA"); };
/* ===== 出力 ===== */
for (var i = 0; i < data.length; i++) {
    var scores = data[i];
    // noUncheckedIndexedAccess 対応（ここで保証）
    if (!scores)
        continue;
    console.log("".concat(subjects[i], "\u306E\u5408\u8A08\u70B9:"), formatScore(sum(scores)));
    console.log("".concat(subjects[i], "\u306E\u5E73\u5747\u70B9:"), formatScore(average(scores)));
    console.log("".concat(subjects[i], "\u306E\u53D7\u9A13\u8005\u6570:"), formatPeople(testTakers(scores)));
    console.log("");
}
