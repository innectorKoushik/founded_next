function toggleText() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("moreText");
  var link = document.getElementById("readMoreLink");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    link.textContent = "Read More";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    link.textContent = "Read Less";
  }
}
