"use strict";

let data: string[] = ["★", "○", "■", "△", "◆", "◎"];

let calc = (data: string[]): void => {
  let i: string = "";
  for (let item of data) {
    i += item;
  }
  console.log(i);
};

calc(data);
