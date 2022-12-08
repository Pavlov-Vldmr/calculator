function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}

function clearA() {
  document.form.textview.value = "";
}

function deleteLastSimb() {
  var string = document.form.textview.value;
  document.form.textview.value = string.slice(0, -1);
}

function changeSign() {
  var string = document.form.textview.value;
  if (string[0] == "-") {
    document.form.textview.value = string.slice(1);
  } else {
    document.form.textview.value = "-" + string;
  }
}

function showResult() {
  var string = document.form.textview.value;
  if (string) {
    document.form.textview.value = eval(string);
  }
}

function squareRoot() {
  var string = document.form.textview.value;
  if (string) {
    document.form.textview.value = Math.sqrt(eval(string));
  }
}

function numbersCheck() {
  var string = document.form.textview.value;
}
