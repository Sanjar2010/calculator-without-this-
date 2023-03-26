let calculator = 0; 
function calculate() {
  let result = 0;
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  switch (calculator) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
 
        result = num1 / num2;

      break;
    default:
      result = 0;
  }

  document.getElementById("result").innerHTML = result;
}