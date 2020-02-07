let numberN = +prompt(`Enter an number N`, 10);

while (!Number.isInteger(numberN)) {
  numberN = +prompt(`Enter the whole number N`, 10);
}
console.log(`Number N: `, numberN);
document.writeln(`<b>Number N:</b> <u>${numberN}</u><br>`);

let numberM = +prompt(`Enter an number M`, 100);
while (!Number.isInteger(numberM) || numberN >= numberM) {
  numberM = +prompt(
    `Enter the number which is whole and biggest than number N`,
    100
  );
}
console.log(`Number M: `, numberM);
document.writeln(`<b>Number M:</b> <u>${numberM}</u> <br>`);

let ignoreEven = confirm(`Ignore even number?`);
console.log(`Ignore even number?:`, ignoreEven);
document.writeln(`<b>Ignore even number?:</b> <u>${ignoreEven}</u> <br>`);

let conclusion = 0;

for (numberN; numberN <= numberM; numberN++) {
  if (ignoreEven === true) {
    if (numberN % 2 !== 0) {
      conclusion += numberN;
    }
  } else {
    conclusion += numberN;
  }
}

console.log(`Conclusion:`, conclusion);
document.writeln(`<b>Conclusion:</b> <u>${conclusion}</u> <br>`);
