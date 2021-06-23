var key = 0;
function CycleImages(name) {
  console.log(name);
  key = (key + 1) % 5;
  var newname = "./images/desktop" + key + ".png";
  document.getElementById("gallery").src = newname;
}
function navChange(id) {
  document.getElementById(id).style.color = "rgb(209, 204, 204)";
  document.getElementById(id).style.transition = "color 1s ease";
}
function navrevert(id) {
  document.getElementById(id).style.color = "white";
  document.getElementById(id).style.transition = "color 1s ease";
}
