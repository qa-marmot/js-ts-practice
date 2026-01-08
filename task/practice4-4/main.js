"use strict";
var data = [
    [75, 55, 91, 50, 60],
    [80, 60, 71, 45, 60],
];
// 合計を求める関数
var sum = function (num) {
    if (num === undefined)
        return 0;
    var sumScore = 0;
    for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
        var i = num_1[_i];
        sumScore += i;
    }
    return sumScore;
};
// 平均を求める関数
var average = function (num) {
    if (num === undefined)
        return 0;
    if (num.length === 0)
        return 0;
    var sumScore = sum(num);
    var averageScore = sumScore / num.length;
    return averageScore;
};
console.log("数学の合計点:", sum(data[0]));
console.log("数学の平均点:", average(data[0]));
console.log("英語の合計点:", sum(data[1]));
console.log("英語の平均点:", average(data[1]));
