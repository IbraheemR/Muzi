

// Contains some fucntions and binding to give the theme functionality

// Show menu when button pressed
document.querySelector(".button#menu").addEventListener("click", function() {
  spaces = document.getElementsByClassName("space")

  for (i=0; i<spaces.length; i++) {
    spaces[i].classList.toggle('menuopen');
  }

});

// If window is not small remove menuopen classes
window.addEventListener('resize', function() {
  if (window.matchMedia("(min-width: 42em)").matches) {
    spaces = document.getElementsByClassName("space")

    for (i=0; i<spaces.length; i++) {
      spaces[i].classList.remove('menuopen');
    }
  }
});

// Go to top when top button pressed
document.querySelector(".button#top").addEventListener("click", function() {
  window.scrollTo(0, 0);
});