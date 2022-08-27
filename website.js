function revealStep(stepNum) {
  var stepToHide = document.getElementsByClassName("stepHidden");
  var stepToReveal = document.getElementsByClassName("stepRevealed");
  stepToHide[stepNum-1].style.display = "none";
  stepToReveal[stepNum-1].style.display = "inline";
  console.log("revealed step "+stepNum);
}