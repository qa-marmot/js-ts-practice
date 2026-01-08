"use strict";
var score = {
    鈴木: [75, 80],
    佐藤: [55, 60],
    田中: [91, 71],
    渡辺: [50, 45],
    近藤: [60, 60],
};
for (var i in score) {
    var subjects = score[i];
    console.log("".concat(i, "\u3055\u3093\u306F\u6570\u5B66:").concat(subjects[0], "\u70B9\u3001\u82F1\u8A9E").concat(subjects[1], "\u70B9\u30672\u6559\u79D1\u306E\u5408\u8A08\u306F").concat(subjects[0] + subjects[1], "\u70B9\u3067\u3059\u3002"));
}
