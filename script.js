// Expert Care BD Website

console.log("Expert Care BD Website Loaded");

document.addEventListener("DOMContentLoaded", function () {
  alert("Welcome to Expert Care BD!");
});
// Expert Care BD Website

// Smooth scroll for menu links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute("href"));
    
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Sticky Header Shadow
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  
  if (window.scrollY > 20) {
    header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Console Message
console.log("Welcome to Expert Care BD");