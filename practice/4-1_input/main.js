var form = document.getElementById('form');
var output = document.getElementById('output');
form.onsubmit = function (e) {
    e.preventDefault();
    var search = form.word.value;
    output.textContent = "[".concat(search, "\u306E\u691C\u7D22\u4E2D\uFF0E\uFF0E\uFF0E]");
};
