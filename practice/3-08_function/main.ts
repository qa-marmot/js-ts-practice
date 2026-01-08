  'use strict';

function total(price: number): number {
  const tax: number = 0.1; 
  return price + price * tax;
}

const message: string = `コーヒーメーカーの値段は${total(8000)}円(税込)です。`;
const message2: string = `コーヒーフィルターの値段は${total(200)}円(税込)です。`;
const message3: string = `コーヒー豆の値段は${total(1000)}円(税込)です。`;

console.log(message);

const outputElement = document.getElementById('output');
if (outputElement) {
  outputElement.textContent = message;
}
const output2Element = document.getElementById('output2');
if (output2Element) {
  output2Element.textContent = message2;
}
const output3Element = document.getElementById('output3');
if (output3Element) {
  output3Element.textContent = message3;
}
