
function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("tabs__wrapeer-card");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("tablink__active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " tablink__active";
}
