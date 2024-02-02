
// -------------------------------------------------------------------------------------------------------------------------------------------------
var popup = ""

const whereWeAt = () => {
    console.log(window)
    // popup.window.location()
}

const goToGoogle = () => {
    window.location.href = "http://google.com"
}

const replaceURL = () => {
    window.location.replace("http://google.com")    //  << no history <<
}

const openPopup = () => {
    popup = window.open("", "", "width=500, height=450")
    // popup = window.open("http://google.com", "", "width=550, height=500")
}

const fillContentInPopup = () => {
    popup.document.write("<h1>This is a Popup</h1>")
}

const assignURLtoPopup = () => {
    popup.location.assign("https://www.google.com")
}

const closePopup = () => {
    window.reload()
    popup.close()
}

const Alert = () => {
    try {
        alert("It is Working")
    }
    catch (error) {
        alert("Something went wrong")
    }
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

// ---------------------------clear-output-----------------------------------

function clearOutput() {
    let outBox = document.getElementById("output").innerHTML;

    if (!outBox.length) {
      showNotification("It's Already Empty", "error");
    } else {
        clearOutput();
        showNotification("Output / Result Box has Been Cleared", "success");
    }
}





