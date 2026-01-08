"use strict";
var data = ["★", "○", "■", "△", "◆", "◎"];
var calc = function (data) {
    var i = "";
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        i += item;
    }
    console.log(i);
};
calc(data);
