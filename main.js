// HEART TOGGLE FUNCTIONS

let heart = document.querySelector(".favourited");
heart.addEventListener("click", function (e) {
  // heart.style.backgroundColor = 'var(--spot-green)'
  heart.style.color =
    heart.style.color === "var(--spot-green)" ? "" : "var(--spot-green)";
  heart.style.fontWeight = heart.style.fontWeight === "bold" ? "" : "bold";
});

let hearty = document.querySelector(".add-to-favourites");
hearty.addEventListener("click", function (e) {
  // heart.style.backgroundColor = 'var(--spot-green)'
  hearty.style.color =
    hearty.style.color === "var(--spot-green)" ? "" : "var(--spot-green)";
  hearty.style.fontWeight = hearty.style.fontWeight === "bold" ? "" : "bold";
});

// MOBILE SIDEBAR

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("mobileNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("mobileNav").style.width = "0%";
}
