function calculator(num1, num2, cal) {
  let result;

  switch (cal) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      throw new Error("Invalid Operator");
  }
  return result;
}

module.exports = calculator;
