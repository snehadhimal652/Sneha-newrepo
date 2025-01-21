function calculation() {
var num1=parseInt(prompt("Enter the first number:"));
var operator =prompt("enter the operator(+,-,*,/):");
var num2=parseInt(prompt("enter the second number:"));
var result;
switch(operator){
    case "+":
        result=num1+num2;
        break;
    case "-":
        result=num1-num2;
        break;
    case "*":
        result=num1*num2;
        break;
    case "/":
        if(num2==0){
            alert("error:division by zero not allowed");
        }
        result=num1/num2;
        break;
}
alert(`The result of ${num1} ${operator} ${num2} is: ${result}`);
}
calculation();
