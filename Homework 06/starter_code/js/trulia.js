

let truliaCards = document.getElementsByClassName("trulia-grid-item");



document.addEventListener('DOMContentLoaded', function (event) {
  // Toggle the navigation

  document.querySelector('.trulia-nav-toggle').addEventListener('click', function (e) {
    e.preventDefault();
    // console.log("I am working!")
    let navSet = document.querySelectorAll('.trulia-nav > nav ul');

    for (let n = 0; n < navSet.length; n++) {
      navSet[n].classList.toggle('trulia-nav-mobilehide');
    }

  });







  // Loop through all the cards with the class of "trulia-grid-item"
  for (let i = 0; i < truliaCards.length; i++) {
    // console.log(truliaCards[i]);
    truliaCards[i].addEventListener('click', function () {
      // Add a click listener on each card
      for (let c = 0; c < truliaCards.length; c++) {
        // console.log(truliaCards[i]);
        truliaCards[c].classList.remove('trulia-featured-grid-item');
        // Remove the featured class .trulia-featured-grid-item
      }
      this.classList.add('trulia-featured-grid-item');
      // Add the featured class .trulia-featured-grid-item on the card that is clicked on

    });
  }
});
