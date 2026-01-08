"use strict";
var todo = [
    "デザインカンプ作成",
    "データ整理",
    "勉強会申し込み",
    "牛乳を買う",
];
todo.push("歯医者に行く");
for (var _i = 0, todo_1 = todo; _i < todo_1.length; _i++) {
    var item = todo_1[_i];
    var li = "<li>".concat(item, "</li>");
    // console.log(li);
    var listElement = document.getElementById('list');
    if (listElement) {
        listElement.insertAdjacentHTML('beforeend', li);
    }
}
