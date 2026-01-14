"use strict";

const lang = document.querySelector("html").lang;

if (lang === "ja") {
  (document.querySelector('option[value="index.html"]') as HTMLOptionElement).selected = true;
} else if (lang === "en") {
  (document.querySelector('option[value="index-en.html"]') as HTMLOptionElement).selected = true;
} else if (lang === "zh") {
  (document.querySelector('option[value="index-zh.html"]') as HTMLOptionElement).selected = true;
}

(document.getElementById("form") as HTMLFormElement).select.onchange = () => {
  location.href = (
    document.getElementById("form") as HTMLFormElement
  ).select.value;
};
