// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });


function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10)
    if (left > 0) {
      dodger.style.left = `${left + 1}px`
    }
  }
  













// dodger.style.left; // "180px"
// dodger.style.bottom; // "0px"

// dodger.style.bottom = "100px";
// dodger.style.bottom = "0px";

// document.addEventListener("keydown", function(e) {
//     if (e.key === "ArrowLeft") {
//       let leftNumbers = dodger.style.left.replace("px", "");
//       let left = parseInt(leftNumbers, 10);
  
//       dodger.style.left = `${left - 1}px`;
//     }
//   });


