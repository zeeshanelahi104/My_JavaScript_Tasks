/*-----------------show output of user object-----------------*/
function showOutput(output) {
  document.getElementById("output").innerHTML = output;
}

// ---------------------------clear-output-----------------------------------
function clearOutput() {
  document.getElementById("output").innerHTML = "";
}
/*-----------------Get Value From User-----------------*/
function getValue(fieldId) {
  return document.getElementById(fieldId).value;
}

/*-----------------Get Random Id for User-----------------*/
// function getID() {
//   return Math.floor(Math.random().toString(36).slice(2));
// }
function getID() {
  // return Math.floor(Math.random() * 1000000);
  return new Date().getTime().toString(36).slice(2);
}

/*-----------------Email Format-----------------*/
let emailFormat =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const emailFormat = /^\S+@\S+\.\S+$/;

// let user = {
//   userFirstName: getValue("firstName"),
//   userLastName: getValue("lastName"),
//   userEmail: getValue("email"),
//   userDOB: getValue("dob"),
//   userID: "123456789",
//   userCountry: "Pakistan",
//   userStatus: "Active",
//   userCity: "Faisalabad",
//   userAge: function = () => {
// };
// };

/*-----------------This is the User constructor function used to create new user objects-----------------*/

function User(userFirstName, userLastName, email, dob) {
  this.userFirstName = userFirstName;
  this.userLastName = userLastName;
  this.email = email;
  this.dob = dob;
  this.id = "";
  this.dateCreated = "";
}

// This is the users array that stores the created user objects.
const users = [];

// User.prototype.calculateAge = function () {
//   let dob = new Date(this.dob);
//   let currentDate = new Date();

//   // calculate month difference from current date in time
//   let month_diff = currentDate.getTime() - dob.getTime();

//   // convert the calculated difference in date time
//   let age_dt = new Date(month_diff);

//   // extract year from current date
//   let year = age_dt.getFullYear();

//   // now, calculate the age of the user
//   let age = Math.abs(year - 1970);

//   return age;
// };

User.prototype.calculateAge = function () {
  let dob = new Date(this.dob);
  let currentDate = new Date();

  // calculate month difference from current date in time
  let month_diff = currentDate.getTime() - dob.getTime();

  // convert the calculated difference in date time
  let age_dt = new Date(month_diff);

  // extract year from current date
  let year = age_dt.getFullYear();

  // now, calculate the age of the user
  let age = Math.abs(year - 1970);

  return age;
};

// ---------------------------Add User-----------------------------------
// function handleSubmit() {
//   event.preventDefault();
//   console.log("Form submitted");
//   let userFirstName = getValue("firstName");
//   let userLastName = getValue("lastName");
//   let email = getValue("email");
//   let dob = getValue("dob");

//   userFirstName = userFirstName.trim();
//   userLastName = userLastName.trim();
//   email = email.trim();

//   if (firstName.length < 3) {
//     showNotification("Please enter your first name correctly!", "error");
//     return;
//   }
//   if (!emailFormat.test(email)) {
//     showNotification("Please enter a valid email address", "error");
//     return;
//   }
//   if (!dob.length) {
//     showNotification("Please enter a valid date of birth", "error");
//     return;
//   }
//   let user = new User(userFirstName, userLastName, userEmail, userDOB);
//   user.id = getID();
//   user.dateCreated = new Date().getTime();
//   users.push(user);
//   alert("A new has been added successfully!");

//   showNotification("A new has been added successfully!", "success");
//   return;
// }

function handleSubmit(event) {
  event.preventDefault();

  const firstName = getValue("firstName").trim();
  const lastName = getValue("lastName").trim();
  const email = getValue("email").trim();
  const dob = getValue("dob").trim();

  if (!firstName || !email || !dob) {
    showNotification("Please fill out the remaining form fields", "warning");
    return;
  }
  if (firstName.length < 3) {
    showNotification("Please enter your first name correctly!", "error");
    return;
  }
  if (!emailFormat.test(email)) {
    showNotification("Please enter a valid email address", "error");
    return;
  }
  if (!dob.length) {
    showNotification("Please enter a valid date of birth", "error");
    return;
  }

  const user = new User(firstName, lastName, email, dob);
  // let user ={
  //   userFirstName: firstName,
  //   userLastName: lastName,
  //   email: email,
  //   dob: dob,
  //   id: "",
  //   dateCreated: "",
  //   status: "Active",
  //   role: "Student",
  // }
  user.id = getID();
  user.dateCreated = new Date().getTime();
  user.status = "Active";
  user.role = "Student";
  users.push(user);
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === user.id) {
      users.splice(i, 1);
      break;
    }
  }
  showNotification("A new user has been added successfully!", "success");
  // showTable();
}

// ---------------------------Show Table-----------------------------------
// function showTable() {
//   if (!users.length) {
//     showNotification("There is no single user in the table", "info");
//     return;
//   }
//   let tableStart =
//     '<div class="table-responsive table-bordered table-striped"><table class="table">';
//   let tableEnd = "</table></div>";

//   let tableHead =
//     "<thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Email</th><th>DOB</th><th>Age</th></tr></thead>";

//   let tableBody = "";
//   for (let i = 0; i < users.length; i++) {
//     tableBody +=
//       "<tr><td>" +
//       (i + 1) +
//       "</td><td>" +
//       users[i].userFirstName +
//       "</td><td>" +
//       users[i].userLastName +
//       "</td><td>" +
//       users[i].email +
//       "</td><td>" +
//       users[i].dob +
//       "</td><td>" +
//       users[i].calculateAge() +
//       "</td></tr>";
//   }

//   let table =
//     tableStart + tableHead + "<table>" + tableBody + "</table>" + tableEnd;
//   document.getElementById("output").innerHTML = "output";

//   showOutput(table);
// }

// function showTable() {
//   if (!users.length) {
//     showNotification("There is no single user in the table", "info");
//     return;
//   }
//   let tableStart =
//     '<div class="table-responsive table-bordered table-striped"><table class="table">';
//   let tableEnd = "</table></div>";

//   let tableHead =
//     "<thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Email</th><th>DOB</th><th>Age</th></tr></thead>";

//   let tableBody = "";
//   for (let i = 0; i < users.length; i++) {
//     tableBody +=
//       "<tr><td>" +
//       (i + 1) +
//       "</td><td>" +
//       users[i].userFirstName +
//       "</td><td>" +
//       users[i].userLastName +
//       "</td><td>" +
//       users[i].email +
//       "</td><td>" +
//       users[i].dob +
//       "</td><td>" +
//       users[i].calculateAge() +
//       "</td></tr>";
//   }

//   let table =
//     tableStart + tableHead + "<table>" + tableBody + "</table>" + tableEnd;

//   showOutput(table);
//   showNotification("Table loaded successfully", "success");
// }

function showTable() {
  if (!users.length) {
    showNotification("There is no single user in the table", "info");
  }else{
  let tableStart =
  '<div class="table-responsive table-bordered table-striped"><table class="table">';
let tableEnd = "</table></div>";

let tableHead =
  "<thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Email</th><th>DOB</th><th>Age</th></tr></thead>";

let tableBody = "";
for (let i = 0; i < users.length; i++) {
  tableBody +=
    "<tr>" +
    "<td>" +
    (i + 1) +
    "</td>" +
    "<td>" +
    users[i].userFirstName +
    "</td>" +
    "<td>" +
    users[i].userLastName +
    "</td>" +
    "<td>" +
    users[i].email +
    "</td>" +
    "<td>" +
    users[i].dob +
    "</td>" +
    "<td>" +
    users[i].calculateAge() +
    "</td>" +
    "</tr>";
}

let table =
  tableStart + tableHead + "<tbody>" + tableBody + "</tbody>" + tableEnd;

showOutput(table);
showNotification("Table loaded successfully", "success");
}

}

/*-------------------------------Clear Output/Result-------------------------------*/

document.getElementById("clearOutput").onclick = function () {
  let outputBoxHTML = document.getElementById("output").innerHTML;
  if (!outputBoxHTML.length) {
    showNotification("Nothing to clear", "info");
  } else {
    clearOutput();
    showNotification("Output has been cleared successfully.", "success");
  }
  // showNotification("There is no single user in the table", "error");
  // return;
};
// -----------------------Print user in Console-----------------------------
function printUser(user) {
  console.log("First Name: " + user.userFirstName);
  console.log("Last Name: " + user.userLastName);
  console.log("Email: " + user.email);
  console.log("DOB: " + user.dob);
  console.log("Age: " + user.calculateAge());
}

/*-------------------------------Toatify-------------------------------*/
function showNotification(msg, type) {
  let color = "";
  switch (type) {
    case "success":
      color = "linear-gradient(to right, #a8e063, #56ab2f)";
      break;
    case "error":
      color = "linear-gradient(to right, #f11523, #7a0b23)";
      break;
    case "warning":
      color = "linear-gradient(to right, #fcb045, #fd1d1d, #833ab4)";
      break;
    case "info":
      color = "linear-gradient(to right, #4DA0B0, #D39D38)";
      break;
    default:
      color = "linear-gradient(to right, #00b09b, #96c93d)";
      break;
  }
  Toastify({
    text: msg,
    duration: 3000,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: color,
    },
  }).showToast();
}

// ---------------------------Year Now-----------------------------------
let nowYear = new Date();
let year = nowYear.getFullYear();
document.getElementById("f-year").innerHTML = year;
