// For Simple Alert
document.getElementById("alert").onclick = function () {
    alert("Please Write Something")
}
// For  Print Name

document.getElementById("name").onclick = function () {
    let name = document.getElementById("input").value
    if (name == "") {
        alert("Please Enter Your Name")
    }
    else {
        document.getElementById("output").innerText = name
    }
}

// For Cities Name

console.log(cities.length)

document.getElementById("cities").onclick = function () {
    document.getElementById("output").innerHTML = ""
    var cities = ["Faisalabad", " Lahore", " Multan", " Sargodha", "Rajanpur", "Bahawalpur", " Sheikhupura"];
    for (var i = 0; i < cities.length; i++) {
        let num = i + 1

        document.getElementById("output").innerHTML += num + ")" + " " + cities[i] + "<br>"
    }

}
// For Add City Name
document.getElementById("addCity").onclick = function () {
    document.getElementById("output").innerHTML = ""
    var cities = ["Faisalabad", " Lahore", " Multan", " Sargodha", "Rajanpur", "Bahawalpur", " Sheikhupura"];
    var yourCity = document.getElementById("input").value
    if (yourCity == "") {
        alert("Enter Your City Name")
    }
    else {
        let newCities = cities.push(yourCity)
        for (var i = 0; i < cities.length; i++) {
            let num = i + 1
            document.getElementById("output").innerHTML += num + ")" + " " + cities[i] + "<br>"
        }
    }

}
// For Generate Table 
document.getElementById("table").onclick = function () {
    document.getElementById("output").innerHTML=""
    let num = document.getElementById("input").value
    if(num==""){
alert("Enter Any Number")
    }
    else{
        for (var i = 1; i <= 10; i++) {
            var result = i * num
           document.getElementById("output").innerHTML += num + " " + "*" + i + " " + "=" + result + "<br>"
        }
    }
    
}


// Action Button for Input
document.getElementById("clear").onclick = function () {
  document.getElementById("input").value = ""
}
// Action Button for Output
document.getElementById(id = "clearOutputButton").onclick = function () {
  document.getElementById("output").innerText = ""
}