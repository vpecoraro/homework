// When the #grayButton is clicked, 

document.getElementById('grayButton').addEventListener('click',function(){
//the color scheme of the page should change to more of a "dark mode" feel, with gray backgrounds and white text throughout.
document.body.style.backgroundColor = "#555555";
document.body.style.color = "#ffffff";


})

// The #whiteButton should bring things back to the "light mode" color scheme with white backgrounds and dark text

document.getElementById('whiteButton').addEventListener('click',function(){
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#555555";
})
// Try to do this by setting styles (.style)
// Remember to try one step at a time, testing each stage as you go!