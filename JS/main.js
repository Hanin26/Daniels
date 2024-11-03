document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar-example");
    const targetSection = document.getElementById("about");
  
    function updateNavbarPosition() {
      const sectionTop = targetSection.getBoundingClientRect().top;
  
      if (sectionTop <= 0) {
        navbar.classList.add("fixed");
        navbar.classList.remove("absolute");
      } else {
        navbar.classList.add("absolute");
        navbar.classList.remove("fixed");
      }
    }
  
    updateNavbarPosition(); 
    window.addEventListener("scroll", updateNavbarPosition);
  });