'use strict'

const form = document.getElementById('form') as HTMLFormElement;
const output = document.getElementById('output')!;

form.onsubmit = (e) => {
  e.preventDefault();
  const search = (form.word as HTMLInputElement).value;
  output.textContent = `[${search}の検索中．．．]`;
};