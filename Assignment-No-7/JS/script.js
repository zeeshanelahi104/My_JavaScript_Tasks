let rightNowDate = new Date();
document.getElementById("originalTextBox").innerHTML = rightNowDate;

let result = document.getElementById("output");
let greetinguser = document.getElementById("greeting");

setInterval(updateTime, 1000);
function updateTime() {
  let date = new Date();
  let original = (document.getElementById("original").innerHTML = date);
}

//Get Name of Today-------------------------------------------------------------------------------------------------------------

function name_of_Today() {
  let date = new Date();
  let day = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  result.innerHTML =
    "Today is <span style='color: Green; font-size: 28px;'>" +
    days[day] +
    "</span>";
}

//Calculate Days Since I Born---------------------------------------------------------------------------------------------------

function days_passed_since_I_Born() {
  let dob = document.getElementById("input").value;

  if (dob == "NaN" || dob == "") {
    result.innerHTML = "Please Enter Your Date Of Birth!";
    return;
  }

  let birthDate = dob;
  let birthDateObj = new Date(birthDate);
  let timeDiff = Date.now() - birthDateObj.getTime();
  let daysSinceBirth = Math.floor(timeDiff / (1000 * 3600 * 24));
  result.innerHTML =
    "Birth Date :  " +
    birthDate +
    "<br>Days Passed Since I Born :  <span style='color: Green; font-size: 28px;'>" +
    daysSinceBirth +
    "</span>";
}

//When is Your Next Birthday?---------------------------------------------------------------------------------------------------

function nextBirthday() {
  let dob = document.getElementById("input").value;

  if (dob == "NaN" || dob == "") {
    result.innerHTML = "Please Enter Your Date Of Birth!";
    return;
  }
  let birthDate = dob;

  function getNextBirthday(birthdate) {
    // Parse birthdate string to Date object
    const birthDateObj = new Date(birthdate);

    // Get current year and next birthday year
    const currentYear = new Date().getFullYear();
    const nextBirthdayYear =
      birthDateObj.getMonth() < new Date().getMonth() ||
      (birthDateObj.getMonth() === new Date().getMonth() &&
        birthDateObj.getDate() < new Date().getDate())
        ? currentYear + 1
        : currentYear;

    // Create Date object for next birthday
    const nextBirthday = new Date(
      nextBirthdayYear,
      birthDateObj.getMonth(),
      birthDateObj.getDate()
    );

    // Calculate time difference between next birthday and now in milliseconds
    const timeDiff = nextBirthday.getTime() - Date.now();

    // Convert time difference to days
    const daysUntilNextBirthday = Math.ceil(timeDiff / (1000 * 3600 * 24));

    // Return number of days until next birthday
    return daysUntilNextBirthday;
  }

  // Call the function with your birthdate in YYYY-MM-DD format
  const daysUntilMyNextBirthday = getNextBirthday("1990-01-01");
  result.innerHTML =
    'Your next birthday is in <span style="color: Green; font-size: 28px;">' +
    daysUntilMyNextBirthday +
    "</span> days!";
}

//Greeting----------------------------------------------------------------------------------------------------------------------

function greetUser() {
  let now = new Date();
  let hour = now.getHours();
  let greeting;

  let name = prompt("Enter Your Name:");
  let myName = name;
  if (myName == null || myName == "") {
    alert("Please Enter Your Name!");
    return;
  } else if (myName.length < 3) {
    alert("Please Enter a Valid Name!");
    return;
  }

  if (hour >= 4 && hour < 11) {
    greeting = "Good Morning! Have a Good Day🤍";
  } else if (hour >= 11 && hour < 20) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Night! Sweet Dreams😊";
  }

  result.innerHTML = greeting + "   " + myName;
  greetinguser.innerHTML = greeting + "   " + myName;
}

//Tell Time---------------------------------------------------------------------------------------------------------------------

function Time() {
  let date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  result.innerHTML =
    "Current Time<br><span style='font-size: 50px; '>" +
    hours +
    " : " +
    min +
    " : " +
    sec +
    "</span>";
}

//Calculate TAX-----------------------------------------------------------------------------------------------------------------

function calculateTax() {
  var cost = prompt("Enter Price");
  price = +cost;
  if (price == "") {
    result.innerHTML =
      "<span style='color: red;'> Enter Price in Prompt! </span>";
    return;
  }

  var tax = 18;

  tax = price * (tax / 100);

  result.innerHTML =
    "Your Tax @ 18% is <br><span style='color: Red; font-size: 36px;'>    " +
    tax +
    "</span>";
}

//Total ------------------------------------------------------------------------------------------------------------------------

function calculateTotalPrice() {
  var cost = prompt("Enter Price");
  price = +cost;
  if (price == "") {
    result.innerHTML =
      "<span style='color: red;'> Enter Price in Prompt! </span>";
    return;
  }

  var tax = 18;

  tax = price * (tax / 100);

  let totalPrice = price + tax;
  totalPrice = Math.round(totalPrice);

  result.innerHTML =
    "<span style='color: blue'>Total Price :  </span>" +
    price +
    "<br><span style='color: red'>Tax @ 18% :  </span>" +
    tax +
    "<br><span style='color: green'>Total Amount :  </span>" +
    totalPrice;
}

// ---------------------------clear-output-----------------------------------

document.getElementById("clearOutput").onclick = function () {
  document.getElementById("output").innerHTML = "";
};

document.getElementById("clear").onclick = function () {
  document.getElementById("input").value = "";
};
