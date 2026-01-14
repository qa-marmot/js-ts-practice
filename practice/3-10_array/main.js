"use strict";
let todo = [
    "デザインカンプ作成",
    "データ整理",
    "勉強会申し込み",
    "牛乳を買う",
];
todo.push("歯医者に行く");
for (let item of todo) {
    const li = `<li>${item}</li>`;
    // console.log(li);
    const listElement = document.getElementById('list');
    if (listElement) {
        listElement.insertAdjacentHTML('beforeend', li);
    }
}
export {};
//# sourceMappingURL=main.js.map