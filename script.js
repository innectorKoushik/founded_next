function toggleText() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("moreText");
  var readMoreLink = document.getElementById("readMoreLink");
  var footer = document.querySelector(".footer-last");

  if (dots.style.display === "none") {
    dots.style.display = "inline"; // Show the dots again
    moreText.style.display = "none"; // Hide the extra text
    readMoreLink.innerHTML = "Read More"; // Change link text back to "Read More"
    footer.classList.remove("expanded"); // Shrink the footer to 30vh
  } else {
    dots.style.display = "none"; // Hide the dots
    moreText.style.display = "inline"; // Show the extra text
    readMoreLink.innerHTML = "Read Less"; // Change link text to "Read Less"
    footer.classList.add("expanded"); // Expand the footer to 90vh
  }
}
document.getElementById("close-button").onclick = function() {
  document.getElementById("faq-section").style.display = "none";
};

document.getElementById("faq-button").onclick = function() {
  // Logic to open the FAQ section can be added here
  alert("This is where the FAQ section would appear!");
};


// swipper 
var swiper = new Swiper('.swiper', {
  slidesPerView: 3, // Shows 3 full slides
  spaceBetween: 30, // Space between slides
  centeredSlides: true, // Keeps the active slide centered
  loop: true, // Enables infinite looping
  autoplay: {
    delay: 3000, // Auto slides every 3 seconds
    disableOnInteraction: false, // Continue autoplay even after user interaction
  },
  breakpoints: {
    1200: {
      slidesPerView: 4, // 5 slides visible for large screens
      spaceBetween: 20, // Adjust the spacing if needed
    },
    768: {
      slidesPerView: 3, // 3 slides for tablets
      spaceBetween: 20
    },
    480: {
      slidesPerView: 1, // 1 slide for small screens like phones
      spaceBetween: 10
    }
  }
});
