const getInputFieldValue = (id) => document.getElementById(id).value;


const getRandomId = () => Math.random().toString(36).slice(2);

const handleSignUp = () => {
  event.preventDefault();
  let firstName = getInputFieldValue("firstName");
  let lastName = getInputFieldValue("lastName");

  let emailFromeSignUp = getInputFieldValue("emailFromSignUp");
  let passwordFromeSignUp = getInputFieldValue("passwordFromSignUp");

  let fullName = (firstName + " " + lastName).trim();
  emailFromeSignUp = emailFromeSignUp.trim();
  passwordFromeSignUp = passwordFromeSignUp.trim();

  if (firstName.length < 3) {
    showNotification("Please enter your first name correctly.", "error");
    return;
  }
  const user = {
    fullName,
    emailFromeSignUp,
    passwordFromeSignUp,
    id: getRandomId(),
    status: "active",
  };

  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  showNotification("A new user has been registered successfully!", "success");
  window.location.href = "index.html";
};



const handleLogin = () => {
  event.preventDefault();
  let emailFromLogin = getInputFieldValue("emailFromLogin");
  let passwordFromLogin = getInputFieldValue("passwordFromLogin");
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(user => user.email === emailFromLogin)
  if (user) {
    if (user.password === passwordFromLogin) {
      // alert("Login")
      showNotification("User logged in successfully!", "success");
      window.location.href = "home.html";
      document.getElementById("welcome").innerHTML = `"Wecome "  ${users.fullName}`;
    } else {
      showNotification("Password is wrong!", "error");
    }
  } else {
    // alert("User not found")
    showNotification("User not found!", "error");

  }

  // for(let i=0; i< myData.length; i++){
  //   let user = myData[i]
  //   if(user.emailFromeSignUp ===  emailFromLogin && user.passwordFromeSignUp===passwordFromLogin){
  //     showNotification("User logged in successfully!", "success");
  //     window.location.href= "home.html";
  //     return;
  //   }
  // }
  // showNotification("User email or password is wrong!", "error");
};

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

