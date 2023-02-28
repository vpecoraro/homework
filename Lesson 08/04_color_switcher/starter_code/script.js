// When the #grayButton is clicked, the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.
// The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text
// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!


//Event Handlers
//when grey li button is clicked, run darkmode function
document.getElementById("grayButton").addEventListener("click", darkMode);

//when white li button is clicked, run lightmode function
document.getElementById("whiteButton").addEventListener("click", lightMode);

//DARK MODE FUNCTION
//turn background color grey and text white
function darkMode() {
    // alert("dark mode works");
    document.body.style.backgroundColor = "gray";
    document.body.style.color = "white";
    // document.getElementById("different").style.color = "red";

}



//LIGHT MODE FUNCTION
//turn background color white and text black
function lightMode() {
    // alert("light mode is working");
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    // document.getElementById("different").style.color = "blue";

}




