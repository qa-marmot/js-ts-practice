"use strict";
var score = [100, 50, 80, 75, 91];
for (var _i = 0, score_1 = score; _i < score_1.length; _i++) {
    var i = score_1[_i];
    var num = 1;
    if (i >= 90 && i <= 100) {
        console.log("".concat(num, "\u4EBA\u76EE\u306E\u70B9\u6570\u306F").concat(i, "\u70B9\u3067\u8A55\u4FA1\u306FA\u3067\u3059"));
    }
    else if (i >= 80 && i < 90) {
        console.log("".concat(num, "\u4EBA\u76EE\u306E\u70B9\u6570\u306F").concat(i, "\u70B9\u3067\u8A55\u4FA1\u306FB\u3067\u3059"));
    }
    else if (i >= 70 && i < 80) {
        console.log("".concat(num, "\u4EBA\u76EE\u306E\u70B9\u6570\u306F").concat(i, "\u70B9\u3067\u8A55\u4FA1\u306FC\u3067\u3059"));
    }
    else if (i >= 0 && i < 70) {
        console.log("".concat(num, "\u4EBA\u76EE\u306E\u70B9\u6570\u306F").concat(i, "\u70B9\u3067\u8A55\u4FA1\u306FD\u3067\u3059"));
    }
    num++;
}
