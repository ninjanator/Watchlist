
var lineHover = document.getElementById("line2");

// Hover Event
document.getElementById("hamburger").addEventListener("mouseenter", function() {

  lineHover.classList.add("line2hover");
  // console.log("Line Class Added");
});

document.getElementById("hamburger").addEventListener("mouseleave", function() {

  lineHover.classList.remove("line2hover");
  // console.log("Line Class Removed");
});



// Click Event
document.getElementById("hamburger").addEventListener("click", function() {

  var dropdown = document.getElementById("navbar-drop");
  dropdown.classList.toggle("showMenu");

  var rotation = document.getElementById("hamburger");
  rotation.classList.toggle("rotateHamburger");

  var transform1 = document.getElementById("line1");
  transform1.classList.toggle("transformLine1");

  var transform2 = document.getElementById("line2");
  transform2.classList.toggle("transformLine2");

  var transform3 = document.getElementById("line3");
  transform3.classList.toggle("transformLine3");


  // console.log("Line 2 Click Event");
});
