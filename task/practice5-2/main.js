"use strict";
var favorites = {
    food: "カレーライス",
    color: "青",
    number: 7,
    sports: "baseball",
};
for (var i in favorites) {
    if (i === "sports") {
        console.log("".concat(favorites[i]));
    }
}
