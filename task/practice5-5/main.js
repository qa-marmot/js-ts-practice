"use strict";
const score = {
    鈴木: [75, 80],
    佐藤: [55, 60],
    田中: [91, 71],
    渡辺: [50, 45],
    近藤: [60, 60],
};
const goodScore = [];
for (let i in score) {
    const subjects = score[i];
    const total = subjects[0] + subjects[1];
    if (total >= 120) {
        goodScore.push(i);
    }
}
let join = goodScore.join(" ");
console.log(`2教科の合計が120点以上の人は${join}です。`);
export {};
//# sourceMappingURL=main.js.map