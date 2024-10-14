function toggleText() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("moreText");
  var readMoreLink = document.getElementById("readMoreLink");

  if (dots.style.display === "none") {
    dots.style.display = "inline"; // Show the "..." again
    moreText.style.display = "none"; // Hide the expanded text
    readMoreLink.innerHTML = "Read More"; // Change the link back to "Read More"
  } else {
    dots.style.display = "none"; // Hide the "..."
    moreText.style.display = "inline"; // Show the expanded text
    readMoreLink.innerHTML = "Read Less"; // Change the link to "Read Less"
  }
}

document.getElementById("close-button").onclick = function() {
  document.getElementById("faq-section").style.display = "none";
};

document.getElementById("faq-button").onclick = function() {
  // Logic to open the FAQ section can be added here
  alert("This is where the FAQ section would appear!");
};
