// Select DOM elements
const btn = document.querySelector("button");
const ratingSection = document.querySelector(".rating__section");
const thanksSection = document.querySelector(".thanks__section");
const ratings = document.querySelectorAll("li");
const finalThanks = document.querySelector("span");
let selectedRating = 0;

// Set up event listeners on DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  ratings.forEach((ratingItem) => {
    ratingItem.addEventListener("click", handleRatingSelection);
  });
});

btn.addEventListener("click", handleSubmit);

// Event handler for rating selection
function handleRatingSelection(event) {
  selectedRating = event.target.innerText;
  document.querySelector(".selected")?.classList.remove("selected");
  event.target.classList.add("selected");
}

// Event handler for submit button
function handleSubmit() {
  updateFinalThanksMessage();
  ratingSection.classList.add("hidden");

  ratingSection.addEventListener("transitionend", handleTransitionEnd, {
    once: true,
  });
}

// Transition end handler
function handleTransitionEnd() {
  thanksSection.classList.remove("hidden");
  thanksSection.querySelector("h1").focus();
}

// Update the final thanks message
function updateFinalThanksMessage() {
  finalThanks.innerText = `You selected ${selectedRating} out of 5`;
}
