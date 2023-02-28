// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...



//how i did it

/*
let stopLight = document.getElementById("stopLight");
let slowLight = document.getElementById("slowLight");
let goLight = document.getElementById("goLight");

document.querySelector("#stopButton").addEventListener("click", function () {
    stopLight.classList.add("turnRed");
    slowLight.classList.remove("turnYellow");
    goLight.classList.remove("turnGreen");

})



document.querySelector("#slowButton").addEventListener("click", function () {
    slowLight.classList.add("turnYellow");
    stopLight.classList.remove("turnRed");
    goLight.classList.remove("turnGreen");

})



document.querySelector("#goButton").addEventListener("click", function () {
    goLight.classList.add("turnGreen");
    stopLight.classList.remove("turnRed");
    slowLight.classList.remove("turnYellow");

})
*/

//solution code

//event handlers for when buttons are clicked to run the functions above 
document.getElementById("stopButton").addEventListener("click", stopLight);
document.getElementById("slowButton").addEventListener("click", yellowLight);
document.getElementById("goButton").addEventListener("click", goLight);


//stopLight function adds red class. Removes yellow and green classes. 
function stopLight() {
    document.getElementById("stopLight").classList.add("red");
    document.getElementById("slowLight").classList.remove("yellow");
    document.getElementById("goLight").classList.remove("green");

}


//yellowLight turns on yellow light but turns off red and green
function yellowLight() {
    document.getElementById("stopLight").classList.remove("red");
    document.getElementById("slowLight").classList.add("yellow");
    document.getElementById("goLight").classList.remove("green");

}

//greenLight turns on green light but turns off red and yellow
function goLight() {
    document.getElementById("stopLight").classList.remove("red");
    document.getElementById("slowLight").classList.remove("yellow");
    document.getElementById("goLight").classList.add("green");

}

