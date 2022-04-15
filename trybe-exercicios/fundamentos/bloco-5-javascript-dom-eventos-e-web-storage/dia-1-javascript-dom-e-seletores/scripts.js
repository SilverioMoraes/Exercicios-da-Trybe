document.getElementById("header-container").style.backgroundColor = "green";
document.getElementsByClassName("emergency-tasks")[0].style.backgroundColor = "salmon";
let emergency = document.getElementsByTagName("h3");
for(let i = 0; i < emergency.length-2;i ++){
emergency[i].style.backgroundColor = "indigo"
}
document.getElementsByClassName("no-emergency-tasks")[0].style.backgroundColor = "yellow";
let noEmergency = document.getElementsByTagName("h3");
for(let i = 2; i < noEmergency.length;i ++){
emergency[i].style.backgroundColor = "black"
}