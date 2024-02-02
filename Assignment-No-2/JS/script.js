//Concatinate Two Strings
document.getElementById("concatenateStrings").onclick = function () {
  var fulName = "Zeeshan Elahi"
  alert("Thanks, " + fulName + "!");

  document.getElementById("statement").innerHTML = "alert('Thanks, " + fulName + "!')";
  document.getElementById("result").innerHTML =  fulName;
};


//Ask User to Enter a name and print it in a div 
document.getElementById("askNameFromUser").onclick = function () {

  var userName = prompt("Plaese enter your name");

  document.getElementById("statement").innerText = " Your name is : " + userName;
  document.getElementById("result").innerHTML =  userName;

};


//Comparison of operators
document.getElementById("comparisonOperator").onclick = function () {
  let html = "<h2 class='text-center'>All Comparison Operators with Complete Detail</h2><ul><li>== For Checking that two vaiables/Strings/Numbers etc. are same or not!</li><li>!= For Checking that two vaiables/Strings/Numbers etc. are not same or same!</li><li>=== For Checking that two vaiables/Strings/Numbers etc. are same or not with their Data Types!</li><li>!== For Checking that two vaiables/Strings/Numbers etc. are not same or same with their Data Types!</li><li>> For Checking that a Number is greater than from the other number or not!</li><li>< For Checking that a Number is less than from the other number or not!</li><li>>= For Checking that a Number is greater than or equal to the other number or not!</li><li><= For Checking that a Number is less than or equal to the other number or not!</li>.";
  document.getElementById("statement").innerHTML = html;
};


//If Else If Statements
document.getElementById("ifElseif").onclick = function(){
  let marks = +prompt("Please enter your marks");
  if(marks >= 90){
      var grade = "You got A+";
      alert(grade);
  }
  else if(marks >= 80){
    grade = "You got A";
    alert(grade);
  }
  else if(marks >= 70){
    grade = "You got B";
    alert(grade);
  }
  else{
    grade = "You Are Fail";
    alert(grade);
  }
  let html = "<p class='text-center'>let marks =  +prompt('Please enter your marks');<br>if(marks >= 90){You got A+);};<br>else if(marks >= 80){You got A);};<br>if(marks >= 70){You got B);};<br>else{You Are Fail);};</p>";
  document.getElementById("statement").innerHTML = html;
  document.getElementById("result").innerHTML =  grade;

}


//Testing Sets of Conditions
document.getElementById("testingSetofConditions").onclick = function(){
  var weight = +prompt("Please enter your weight");
  var time = +prompt("Please enter time");
  if (weight > 300 && time < 6) {
    var suggestion = "Come to our tryout!";
    alert(suggestion);
   }
   else {
    suggestion = "Come to our cookout!";
    alert(suggestion);
   }

  let html = "<p class='text-center'>var weight =  +prompt('Please enter your weight');<br>var time =  +prompt('Please enter time');<br> if (weight > 300 && time < 6) {Come to our tryout!);};<br>else{Come to our cookout!);};</p>";
  document.getElementById("statement").innerHTML = html;
  document.getElementById("result").innerHTML =  suggestion;

}

//if Statements Nested
document.getElementById("ifStatementsNested").onclick = function(){
  var age = +prompt("Please enter your age");
  if( age < 18 )
  {
    var work = "You are Minor.\n Not Eligible to Work";
    alert(work);
  }
  else
  {
    if (age >= 18 && age <= 60 )
    {
      work = "You are Eligible to Work.\n Please fill in your details and apply";
      alert(work);
    }
    else
    {
      work = "You are too old to work as per the Government rules\nPlease Collect your pension!";
      alert(work);  
    }
  }


  let html = "<p class='text-left'>var age =  +prompt('Please enter your age');<br>if( age < 18 ) {<br>You are Minor.<br\>Not Eligible to Work!);};<br>else{<br>if (age >= 18 && age <= 60 ){<br>You are Eligible to Work.<br\>Please fill in your details and apply!);};<br\>else{<br>You are too old to work as per the Government rules.<br\>Please Collect your pension!};</p>";
  document.getElementById("statement").innerHTML = html;
  document.getElementById("result").innerHTML =  work;

}

//Login
document.getElementById("login").onclick = function (){
  let userName = prompt ("Please enter your email:");
  let password = prompt ("Please enter your password:");
  if (userName === "zeeshanelahi104@gmail.com" && password === "12345678"){
      var message = "User logged in Successfully.";
      document.getElementById("statement").innerHTML = message;
  } else {
      message = "Username or Password is Incorrect!!!";
      document.getElementById("statement").innerHTML = message;
  }
  document.getElementById("result").innerHTML =  message;
      document.getElementById("statement").innerHTML = message;
      let html = "<p class='text-left'>let userName = prompt ('Please enter your email:');<br>let password = prompt ('Please enter your password:');<br> if (userName === 'zeeshanelahi104@gmail.com' && password === '12345678'){<br\>var message = 'User logged in Successfully.';<br\>document.getElementById('statement').innerHTML = message;<br\>} else {<br\>message = 'Username or Password is Incorrect!!!';<br\>document.getElementById('statement').innerHTML = message;<br\>}</p>";
  document.getElementById("statement").innerHTML = html;
}



//Clear Statements
document.getElementById("clearStatementButton").onclick = function () {
  document.getElementById("statement").innerHTML = "";
};


//Clear Output
document.getElementById("output").onclick = function () {
  document.getElementById("result").innerHTML = "";
};





