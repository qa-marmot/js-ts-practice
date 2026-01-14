'use strict';
const form = document.getElementById('form');
const output = document.getElementById('output');
form.onsubmit = (e) => {
    e.preventDefault();
    const search = form.word.value;
    output.textContent = `[${search}の検索中．．．]`;
};
export {};
//# sourceMappingURL=main.js.map