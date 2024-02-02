// ---------------------------clear-output-----------------------------------

document.getElementById("clearOutput").onclick = function () {
  document.getElementById("output").innerHTML = "";
};

document.getElementById("clear").onclick = function () {
  document.getElementById("input").value = "";
};

let result = document.getElementById("output");

// Round a Number---------------------------------------------------------------------------------------------------------------

function round() {
  var value = document.getElementById("input").value;

  if (value == "") {
    Toastify({
      text: "Please enter a value in input field!",
      duration: 3000,
      // destination: "https://github.com/apvarun/toastify-js",
      // newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, red, blue)",
      },
      // onClick: function () {}, // Callback after click
    }).showToast();
    // result.innerHTML =
    //   "<span style='color: red;'> PLEASE ENTER A VALUE IN INPUT FIELD! </span>";
    return;
  }

  let num = +value;
  let roundedValue = Math.round(num);
  console.log(roundedValue);
  result.innerHTML = roundedValue;
}

// Ceil a Number----------------------------------------------------------------------------------------------------------------

function ceil() {
  var value = document.getElementById("input").value;

  if (value == "") {
    result.innerHTML =
      "<span style='color: red;'> PLEASE ENTER A VALUE IN INPUT FIELD! </span>";
    return;
  }

  let num = +value;
  let ceilNumber = Math.ceil(num);
  console.log(ceilNumber);
  result.innerHTML = ceilNumber;
}

// Floor a Number---------------------------------------------------------------------------------------------------------------

function floor() {
  var value = document.getElementById("input").value;

  if (value == "") {
    result.innerHTML =
      "<span style='color: red;'> PLEASE ENTER A VALUE IN INPUT FIELD! </span>";
    return;
  }

  let num = +value;
  let floorNumber = Math.floor(num);
  console.log(floorNumber);
  result.innerHTML = floorNumber;
}

// Random Number----------------------------------------------------------------------------------------------------------------

function generate_A_randomNumber() {
  let randomNumber = Math.random();
  console.log(randomNumber);
  result.innerHTML = randomNumber;
}

// Dice-------------------------------------------------------------------------------------------------------------------------

function through_A_Dice() {
  let randomNumber = Math.random();
  console.log(randomNumber);
  randomNumber = randomNumber * 6 + 1;
  let dice = Math.floor(randomNumber);
  console.log(dice);
  result.innerHTML = dice;
}

//Strong Password---------------------------------------------------------------------------------------------------------------

function generate_A_strongPassword() {
  var value = document.getElementById("input").value;
  value = value - 1;
  if (value < 5 || value > 17) {
    result.innerHTML =
      "<span style='color: red;'> Password length must above 6 <br> and Below 18 </span>";
    return;
  }

  let capAlp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let smallAlp = "abcdefghijklmnopqrstuvwxyz";
  let nums = "1234567890";
  let chars = "`~!@#$%^&*-_=+/?.,";

  let allKey = capAlp + smallAlp + nums + chars;

  result.innerHTML = "";

  for (let i = 0; i <= value; i++) {
    let randomNumber = Math.random();
    console.log(randomNumber);
    randomNumber = randomNumber * 79 + 1;
    let passIndex = Math.floor(randomNumber);
    console.log(passIndex);
    result.innerHTML += allKey[passIndex];
  }
}

// String Converting -----------------------------------------------------------------------------------------------------------

function convertString() {
  var value = document.getElementById("input").value;

  if (value == "") {
    result.innerHTML =
      "<span style='color: red;'> PLEASE ENTER A VALUE IN INPUT FIELD! </span>";
    return;
  }

  let convertInt = parseInt(value);
  let convertFloat = parseFloat(value);

  console.log(convertInt);
  console.log(convertFloat);
  result.innerHTML =
    "Integer :  " + convertInt + "<br>Float :  " + convertFloat;
}

//Controlling Length -----------------------------------------------------------------------------------------------------------

btn8.onclick = function () {
  var value = document.getElementById("input").value;

  if (value == "") {
    result.innerHTML =
      "<span style='color: red;'> Enter Length between 1 - 9 </span>";
    return;
  }

  let originalString = 25.123456789;
  let newOriginalString = originalString.toFixed(value);

  result.innerHTML =
    "Original String :  " +
    originalString +
    "<br>Controlled Value :  " +
    newOriginalString;
};

//GST --------------------------------------------------------------------------------------------------------------------------

btn9.onclick = function () {
  var cost = document.getElementById("input").value;
  price = +cost;
  if (price == "") {
    result.innerHTML =
      "<span style='color: red;'> Enter Price in Input Field! </span>";
    return;
  }

  var tax = prompt("Enter Tax");

  if (tax == "") {
    result.innerHTML =
      "<span style='color: red;'> Enter Tax in Prompt! </span>";
    return;
  }

  tax = price * (tax / 100);

  console.log("Price => ", price);
  console.log("Tax => ", tax);
  let totalPrice = price + tax;
  totalPrice = Math.round(totalPrice);
  console.log("Total Price =>", totalPrice);

  result.innerHTML =
    "<span style='color: blue'>Total Price :  </span>" +
    price +
    "<br><span style='color: red'>Tax :  </span>" +
    tax +
    "<br><span style='color: green'>Total Amount :  </span>" +
    totalPrice;
};
