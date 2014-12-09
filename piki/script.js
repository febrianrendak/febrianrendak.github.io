$(document).ready(function() {
  var pikiBirthday = 1991;
  var currentYear = new Date().getFullYear();
  var pikiAge = currentYear - pikiBirthday;

  $("#pikiage").text(pikiAge);
})
