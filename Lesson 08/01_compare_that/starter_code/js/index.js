
document.querySelector('#submit').onclick = function (e) {
  e.preventDefault();
  let comparison;
  let a = Number(document.querySelector('#a').value);
  let b = Number(document.querySelector('#b').value);

  // Add comparison logic 
  //our task is to figure out which value is greater and to put the correct value in the comparsion variable

  //if A is greater than B 
  if (a > b) {
    comparison = ">";
  }

  //if B is greater than A
  if (b > a) {
    comparison = "<";
  }

  //if a and b are equal then show = 
  if (a == b) {
    comparison = "=";
  }



  //if a is not a number OR b is not a number then show N/A
  if (isNaN(a) || isNaN(b)) {
    comparison = "N/A";
  }

  document.querySelector('#comparison').innerText = comparison;
};

