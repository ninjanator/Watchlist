document.getElementById("hamburger").addEventListener("click", function() {

  var moveMenuLeft = document.getElementById("slideInMenu");
  moveMenuLeft.classList.toggle("moveMenu");
  console.log('body moved');

});
