"use strict";
var capitalLocation = {
    北海道: "札幌市",
    青森県: "青森市",
    秋田県: "秋田市",
    山形県: "山形市",
    福島県: "福島市",
};
for (var i in capitalLocation) {
    console.log("".concat(i, "\u306E\u770C\u5E81\u6240\u5728\u5730\u306F\u3001").concat(capitalLocation[i]));
}
