document.addEventListener('DOMContentLoaded', function() {
  var display = document.getElementById('display');
  var buttons = document.getElementsByTagName('button');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      var buttonValue = this.innerHTML;

      if (buttonValue === '=') {
        try {
          display.value = evalWithParentheses(display.value);
        } catch (error) {
          display.value = 'Error';
        }
      } else if (buttonValue === 'C') {
        display.value = '';
      } else if (buttonValue === 'DEL') {
        display.value = display.value.slice(0, -1);
      } else if (buttonValue === '√') {
        display.value = Math.sqrt(eval(display.value));
      } else if (buttonValue === 'π') {
        display.value += Math.PI;
      } else if (buttonValue === '^') {
        display.value += '**';
      } else if (buttonValue === '!') {
        var factorialValue = 1;
        for (var j = 1; j <= eval(display.value); j++) {
          factorialValue *= j;
        }
        display.value = factorialValue;
      } else if (buttonValue === '(') {
        display.value += '(';
      } else if (buttonValue === ')') {
        display.value += ')';
      } else {
        display.value += buttonValue;
      }
    });
  }

  function evalWithParentheses(expression) {
    var openingBracketsCount = (expression.match(/\(/g) || []).length;
    var closingBracketsCount = (expression.match(/\)/g) || []).length;

    if (openingBracketsCount !== closingBracketsCount) {
      return 'Error: Unbalanced parentheses';
    }

    return eval(expression);
  }
});
