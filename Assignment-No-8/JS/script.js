let date = new Date();
let days = date.getDay();

/*If else*/
const IfElse = function () {
  if (days === 0) {
    alert("It's Sunday today.");
    showOutput("It's Sunday today.");
  } else if (days === 1) {
    alert("It's Monday today.");
    showOutput("It's Monday today.");
  } else if (days === 2) {
    alert("It's Tuesday today.");
    showOutput("It's Tuesday today.");
  } else if (days === 3) {
    alert("It's Wednesday today.");
    showOutput("It's Wednesday today.");
  } else if (days === 4) {
    alert("It's Thursday today.");
    showOutput("It's Thursday today.");
  } else if (days === 6) {
    alert("It's Saturday today.");
    showOutput("It's Saturday today.");
  } else {
    alert("It is another day");
    showOutput("It is another day");
  }
};

/*Switch*/
const Switch = function () {
  let day = new Date().getDay();
  switch (day) {
    case 0:
      alert("It's Sunday today.");
      showOutput("It's Sunday today.");

      break;
    case 1:
      alert("It's Monday today.");
      showOutput("It's Monday today.");
      break;
    case 2:
    case 3:
      alert("It is another day");
      showOutput("It is another day");
      break;
    case 4:
      alert("It's Thursday today.");
      showOutput("It's Thursday today.");
      break;
    case 5:
      alert("It is another day");
      showOutput("It is another day");
      break;
    case 6:
      alert("It's Saturday today.");
      showOutput("It's Saturday today.");

      break;
    default:
      alert("It's a wrong day");
      showOutput("It's a wrong day");
  }
};

// Keep asking the name

const AskingName = function () {
  do {
    var yourName = prompt("Please enter your name:");
    if (yourName) {
      yourName = yourName.trim();
    }
    console.log(yourName);
  } while (yourName === null || yourName.length < 3);
  showOutput(yourName);
};

// ---------------------------output-----------------------------------

function showOutput(output) {
  document.getElementById("output").innerHTML = output;
}

// ---------------------------clear-output-----------------------------------

document.getElementById("clearOutput").onclick = function () {
  document.getElementById("output").innerHTML = "";
};

document.getElementById("clear").onclick = function () {
  document.getElementById("input").value = "";
};
