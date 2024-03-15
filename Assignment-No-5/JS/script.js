// // For Simple Alert
// document.getElementById("alert").onclick = function () {
//     alert("Please Write Something")
// }
// // For  Print Name

// document.getElementById("name").onclick = function () {
//     let name = document.getElementById("input").value
//     if (name == "") {
//         alert("Please Enter Your Name")
//     }
//     else {
//         document.getElementById("output").innerText = name
//     }
// }

// // For Cities Name

// console.log(cities.length)

// document.getElementById("cities").onclick = function () {
//     document.getElementById("output").innerHTML = ""
//     var cities = ["Faisalabad", " Lahore", " Multan", " Sargodha", "Rajanpur", "Bahawalpur", " Sheikhupura"];
//     for (var i = 0; i < cities.length; i++) {
//         let num = i + 1

//         document.getElementById("output").innerHTML += num + ")" + " " + cities[i] + "<br>"
//     }

// }
// // For Add City Name
// document.getElementById("addCity").onclick = function () {
//     document.getElementById("output").innerHTML = ""
//     var cities = ["Faisalabad", " Lahore", " Multan", " Sargodha", "Rajanpur", "Bahawalpur", " Sheikhupura"];
//     var yourCity = document.getElementById("input").value
//     if (yourCity == "") {
//         alert("Enter Your City Name")
//     }
//     else {
//         let newCities = cities.push(yourCity)
//         for (var i = 0; i < cities.length; i++) {
//             let num = i + 1
//             document.getElementById("output").innerHTML += num + ")" + " " + cities[i] + "<br>"
//         }
//     }

// }
// // For Generate Table
// document.getElementById("table").onclick = function () {
//     document.getElementById("output").innerHTML=""
//     let num = document.getElementById("input").value
//     if(num==""){
// alert("Enter Any Number")
//     }
//     else{
//         for (var i = 1; i <= 10; i++) {
//             var result = i * num
//            document.getElementById("output").innerHTML += num + " " + "*" + i + " " + "=" + result + "<br>"
//         }
//     }

// }

// // Action Button for Input
// document.getElementById("clear").onclick = function () {
//   document.getElementById("input").value = ""
// }
// // Action Button for Output
// document.getElementById(id = "clearOutputButton").onclick = function () {
//   document.getElementById("output").innerText = ""
// }

let origninalText =
  "I love my country Pakistan. <br> I love my city Faisalabad.<br> I love my homeland.";
let cities = ["Islamabad", "Lahore", "Karachi", "Peshawar", "Quetta"];
// ---------------------------lowercase-----------------------------------
function lowercase() {
  let newOriginalText = origninalText.toLowerCase();
  document.getElementById("output").innerHTML = newOriginalText;
}

// ---------------------------uppercase-----------------------------------

function uppercase() {
  let newOriginalText = origninalText.toUpperCase();
  document.getElementById("output").innerHTML = newOriginalText;
}

// ---------------------------capitalize-----------------------------------

function capitalize() {
  let textInCapitalizeForm =
    '<span style="text-transform:capitalize">' + origninalText + "</span>";
  document.getElementById("output").innerHTML = textInCapitalizeForm;
}

// ---------------------------better-formatting-------------------------------

function betterFormatting() {
  let word = document.getElementById("our-input").value;
  if (word.length < 3) {
    alert("please enter a word correctly");
    return;
  }
  let wordFirstLetter = word.charAt(0).toUpperCase();
  let wordAllLetters = word.slice(1).toLowerCase();
  let wordInBetterFormatting = wordFirstLetter + wordAllLetters;
  document.getElementById("output").innerHTML = wordInBetterFormatting;
}

// ---------------------------print-cities-----------------------------------

function printCities() {
  document.getElementById("output").innerHTML = " ";

  for (i = 0; i < cities.length; i++) {
    let num = i + 1;
    document.getElementById("output").innerHTML +=
      num + ")" + " " + cities[i] + " " + "<br>";
  }
}

// ---------------------------add-city-----------------------------------

function addCity() {
  let newCity = document.getElementById("input").value;
  if (!newCity) {
    alert("please enter city name correctly");
    return;
  }
  newCityFirstLetter = newCity.charAt(0).toUpperCase();
  newCityAllLetters = newCity.slice(1).toLowerCase();
  newCityInCapitalize = newCityFirstLetter + newCityAllLetters;

  let cityFound = false;
  for (i = 0; i < cities.length; i++) {
    if (cities[i] === newCityInCapitalize) {
      cityFound = true;
      document.getElementById("output").innerHTML =
        "<span style='color:red'>" +
        "&quot" +
        newCityInCapitalize +
        "&quot" +
        "</span>" +
        " is already in cities list";
    }
  }

  if (cityFound === false) {
    cities.push(newCityInCapitalize);
    document.getElementById("output").innerHTML =
      "<span style='color:green'>" +
      newCityInCapitalize +
      "&quot" +
      "</span>" +
      " has been successfully added into the list";

    document.getElementById("print-cities").onclick = function () {
      document.getElementById("output").innerHTML = " ";
      for (i = 0; i < cities.length; i++) {
        num = i + 1;
        document.getElementById("output").innerHTML +=
          num + ")" + " " + cities[i] + "<br>";
      }
    };
  }
}

// ---------------------------check-city------------------------------------

function checkCity() {
  let checkCity = document.getElementById("input").value;
  if (!checkCity) {
    alert("please enter city name correctly");
    return;
  }
  checkCityFirstLetter = checkCity.charAt(0).toUpperCase();
  checkCityAllLetters = checkCity.slice(1).toLowerCase();
  checkCityWordInCapitalize = checkCityFirstLetter + checkCityAllLetters;

  let cityFound = false;
  for (i = 0; i < cities.length; i++) {
    if (cities[i] === checkCityWordInCapitalize) {
      cityFound = true;
      document.getElementById("output").innerHTML =
        "Your city " +
        "<span style='color:green'>" +
        checkCityWordInCapitalize +
        "</span>" +
        " is available in list";
    }
  }
  if (cityFound === false) {
    document.getElementById("output").innerHTML =
      "Sorry we couldn't found your city " +
      "<span style='color:red'>" +
      checkCityWordInCapitalize +
      "</span>" +
      " in the list";
  }
}

// ---------------------------find-word-------------------------------------

function findWord() {
  let word = document.getElementById("our-input").value;
  if (!word) {
    alert("please enter word correctly");
    return;
  }
  word = word.toLowerCase();
  let newOriginalText = origninalText.toLowerCase();
  let findWord = newOriginalText.indexOf(word);
  if (findWord !== -1) {
    document.getElementById("output").innerHTML =
      "the word you entered is found at index: " + findWord;
  } else {
    document.getElementById("output").innerHTML =
      "the word " +
      "<span style='color:red'>" +
      word +
      "</span>" +
      " is not found in the original text";
  }
}

// ---------------------------replace-word-----------------------------------

function replaceWord() {
  let oldWord = document.getElementById("our-input").value;
  let newWord = prompt("please enter replacing word");
  if (!oldWord || !newWord) {
    alert("please enter new or old word correctly");
    return;
  }
  oldWord = oldWord.toLowerCase();
  newWord = newWord.toLowerCase();
  let newOriginalText = origninalText.toLowerCase();
  oldWord = new RegExp(oldWord, "g");
  let replacedWord = newOriginalText.replace(oldWord, newWord);
  document.getElementById("output").innerHTML = replacedWord;
}
// ---------------------------clear-output-----------------------------------

document.getElementById("clear-output").onclick = function () {
  document.getElementById("output").innerHTML = " ";
};
