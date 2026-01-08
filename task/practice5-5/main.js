"use strict";
var score = {
    鈴木: [75, 80],
    佐藤: [55, 60],
    田中: [91, 71],
    渡辺: [50, 45],
    近藤: [60, 60],
};
var goodScore = [];
for (var i in score) {
    var subjects = score[i];
    var total = subjects[0] + subjects[1];
    if (total >= 120) {
        goodScore.push(i);
    }
}
var join = goodScore.join(" ");
console.log("2\u6559\u79D1\u306E\u5408\u8A08\u304C120\u70B9\u4EE5\u4E0A\u306E\u4EBA\u306F".concat(join, "\u3067\u3059\u3002"));
