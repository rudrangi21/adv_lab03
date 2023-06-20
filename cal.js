function sin() {
  document.CalculatorScientific.result.value = Math.sin(document.CalculatorScientific.result.value);
}

function cos() {
  document.CalculatorScientific.result.value = Math.cos(document.CalculatorScientific.result.value);
}

function tan() {
  document.CalculatorScientific.result.value = Math.tan(document.CalculatorScientific.result.value);
}

function backSpace() {
  var a = document.CalculatorScientific.result.value;
  document.CalculatorScientific.result.value = a.substr(0, a.length - 1);
}

function square() {
  document.CalculatorScientific.result.value = Math.pow(document.CalculatorScientific.result.value, 2);
}

function squareRoot() {
  document.CalculatorScientific.result.value = Math.pow(
    document.CalculatorScientific.result.value,
    1 / 2
  );
}

function number(value) {
  document.CalculatorScientific.result.value += value;
}

function button_clear() {
  document.CalculatorScientific.result.value = " ";
}

function equalTo() {
  document.CalculatorScientific.result.value = eval(document.CalculatorScientific.result.value);
}
