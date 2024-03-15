//Alert and Print a Name
var fulName = ""
document.getElementById("alertString").onclick = function () {
  // document.getElementById("statement").innerHTML = "<b>I am a bold text</b>"

  alert("Zeeshan Elahi")

  document.getElementById("statement").innerHTML = "alert('Zeeshan Elahi')"
};


//Alert and Print a Number
document.getElementById("alertNumber").onclick = function () {

  alert("123");

  document.getElementById("statement").innerHTML = " alert('123')";
};


//Alert and Print Variable Names
document.getElementById("variableNames").onclick = function () {
  let html = "<ul><li>A variable name can't contain any spaces</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Thoughn a variable name can't be any of JavaScript's keywords, it can contain keywords. For Example, <code>userAlert</code> and  <code>myVar</code> are legal.";
  document.getElementById("statement").innerHTML = html;
};


//Alert and Print camelCase
document.getElementById("camelCase").onclick = function () {
  let html = "<ul><li>userResponse</li><li>userResponseTime</li><li>userResponseTimeLimit</li><li>response</li></ul>";
  document.getElementById("statement").innerHTML = html;
};


//Sum Two Numbers
document.getElementById("sumOfNumbers").onclick = function () {

  let number1 = 30
  let number2 = 20;
  let sum = number1 + number2;

  let html = "<p class='text-center'>let number1 = " + number1 + ";<br>let number2 = " + number2 + ";<br>let sum = number1 + number2;</p>";
  document.getElementById("statement").innerHTML = html;
  document.getElementById("result").innerHTML =  sum;

};


//Subtract Two Numbers
document.getElementById("subtractNumbers").onclick = function () {

  let number1 = 100;
  let number2 = 20;
  let difference = number1 - number2;

  let html = "<p class='text-center'>let number1 = " + number1 + ";<br>let number2 = " + number2 + ";<br>let difference = number1 - number2;</p>";
  document.getElementById("statement").innerHTML = html;
  document.getElementById("result").innerHTML = difference;

}


//Multiply Two Numbers
document.getElementById("multiplyNumbers").onclick = function () {

  let number1 = 70;
  let number2 = 20;
  let multiply = number1 * number2;

  let html = "<p class='text-center'>let number1 = " + number1 + ";<br>let number2 = " + number2 + ";<br>let multiply = number1 x number2;</p>";
  document.getElementById("statement").innerHTML = html;
  document.getElementById("result").innerHTML = multiply;

};

//Divide Two Numbers
document.getElementById("divideNumbers").onclick = function () {

  let number1 = 99;
  let number2 = 33;
  let divide = number1 / number2;

  let html = "<p class='text-center'>let number1 = " + number1 + ";<br>let number2 = " + number2 + ";<br>let divide = number1 / number2;</p>";
  document.getElementById("statement").innerHTML = html;
  document.getElementById("result").innerHTML = divide;

};


//Calculate Some Numbers
document.getElementById("calculateSomeNumbers").onclick = function () {

  let someCalculation = 45 / 9 * 5 + 11 ** 3 - (15 - 67);


  let html = "<p class='text-center'> let someCalculation = 45 / 9 * 5 + 11 ** 3 - (15 - 67)</p>";
  document.getElementById("statement").innerHTML = html;
  document.getElementById("result").innerHTML = someCalculation;

};



//Clear Statements
document.getElementById("clearStatementButton").onclick = function () {
  document.getElementById("statement").innerHTML = "";
};


//Clear Output
document.getElementById("output").onclick = function () {
  document.getElementById("result").innerHTML = "";
};





