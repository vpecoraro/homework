//wait for the DOM elements to load before executing
document.addEventListener('DOMContentLoaded', function (event) {
    // Create a function that runs whenever the submit button is clicked
    //prevent the submit button from refreshing the page
    document.querySelector("#submit-btn").addEventListener("click", function (e) {
        e.preventDefault();

        //get the textbox, get the value entered into the text box and correct it for capitalization, get the circle
        let moodInput = document.querySelector("#mood");
        let moodValue = moodInput.value.toLowerCase();
        let moodRing = document.querySelector(".moodring > div");
        console.log(moodRing)


        // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'
        // if the user inputs happy/good/great change the CSS class to 'happy'
        // if the user inputs bad/angry change the CSS class to 'bad'

        if (moodValue === "excited" || moodValue === "ecstatic" || moodValue === "fantastic") {
            moodRing.setAttribute('class', 'excited');

        } else if (moodValue === "happy" || moodValue === "good" || moodValue === "great") {
            moodRing.setAttribute('class', 'happy');

        } else if (moodValue === "bad" || moodValue === "angry") {
            moodRing.setAttribute('class', 'bad');
        } else {
            alert("That's a funky mood! Try entering excited, ecstatic, fantastic, happy, good, great, bad, angry!")

        };


    });
});