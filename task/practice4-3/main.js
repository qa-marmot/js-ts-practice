"use strict";
var _a;
var data = [
    ["JavaScript", "PHP", "Python"],
    ["MySQL", "PostgreSQL", "SQLite"],
    ["Windows", "Mac", "Linux"],
];
var score = (_a = data[0]) === null || _a === void 0 ? void 0 : _a[2];
if (score !== undefined) {
    console.log(score);
}
else {
    console.log("スコアが存在しません");
}
