//wait for the DOM elements to load before executing
document.addEventListener('DOMContentLoaded', function (event) {

    // Create a function that runs whenever the submit button is clicked
    //prevent the submit button from refreshing the page
    document.querySelector('#submit-btn').addEventListener('click', function (e) {
        e.preventDefault();


        //Create a variable called moodvalue and get the value of the #mood input
        //Correct for capitalization
        let moodInput = document.querySelector('#mood');
        let moodValue = moodInput.value.toLowerCase();
        let moodRing = document.querySelector('.moodring > div');
        console.log(moodRing);

        // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'
        // if the user inputs happy/good/great change the CSS class to 'happy'
        // if the user inputs bad/angry change the CSS class to 'bad'
        if (moodValue === "excited" || moodValue === "ecstatic" || moodValue === "fantastic") {
            moodRing.classList.add('excited');
            moodRing.classList.remove('bad', 'happy');
        } else if (moodValue === "happy" || moodValue === "good" || moodValue === "great") {
            moodRing.classList.add('happy');
            moodRing.classList.remove('excited', 'bad');
        } else if (moodValue === "bad" || moodValue === "angry") {
            moodRing.classList.add('bad');
            moodRing.classList.remove('excited', 'happy');
        } else {
            alert("Woaahh! That's a funky mood. Try entering one of the following values: excited, ecstatic, fantastic, happy, good, great, bad, angry");
        }



    });
});