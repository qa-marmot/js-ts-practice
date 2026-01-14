"use strict";
const favorites = {
    food: "カレーライス",
    color: "青",
    number: 7,
    sports: "baseball",
};
for (let i in favorites) {
    if (i === "sports") {
        console.log(`${favorites[i]}`);
    }
}
export {};
//# sourceMappingURL=main.js.map