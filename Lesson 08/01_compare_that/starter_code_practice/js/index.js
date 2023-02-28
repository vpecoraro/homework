//if #submit button is clicked, run the following event function
document.querySelector('#submit').onclick = function (e) {
  //stop the default onclick browser action from occuring
  e.preventDefault();
  //placeholder for the comparison result
  let comparison;
  //get the number that is entered in the #a input tag and store it in variable a 
  let a = Number(document.querySelector('#a').value);
  //get the number that is entered in the #b input tag and store it in variable b
  let b = Number(document.querySelector('#b').value);


  // Add comparison logic
  //if a is greater than b, then add ">"" in the span with the ID comparison.
  //if a is less than b, then add "<" in the span with the ID comparison
  //if a is equal to b and the type is a number, then add "==" in the span with the ID comparison
  //if all of the above is false,  then add "N/A" in the span with the ID comparison

  if (a > b) {
    comparison = ">";
  } else if (a < b) {
    comparison = "<";
  } else if (a === b) {
    comparison = "==";
  } else {
    comparison = "N/A";
  }

  document.querySelector('#comparison').innerText = comparison;
};
