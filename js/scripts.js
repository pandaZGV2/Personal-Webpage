var key = 0;
function CycleImages(name) {
  // console.log(name);
  key = (key + 1) % 5;
  var newname = "../img/desktop" + key + ".png";
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
function Addtotable(event) {
  let table_entry = { name: "", skill: "", level: "" };
  table_entry.name = document.getElementById("name").value;
  table_entry.skill = document.getElementById("skill").value;
  table_entry.level = document.getElementById("level").value;
  if (table_entry.level == "Choose an Option")
  {
    alert("Please choose a valid skill level!")
    return false;
  }
  document.getElementById("skills").reset();
  let curr_data_string = localStorage.getItem("table_data") || "[]";
  let curr_data = JSON.parse(curr_data_string);
  curr_data.push(table_entry);
  let new_data_string = JSON.stringify(curr_data);
  localStorage.setItem("table_data", new_data_string);

  currentTable = document.getElementById("skills_table");
  currentTable.innerHTML = "";
  for (var i = 0; i < curr_data.length; i++) {
    currentTable.innerHTML += `<tr><td>${curr_data[i].name}</td><td>${curr_data[i].skill}</td><td>${curr_data[i].level}</td></tr>`;
  }
  event.preventDefault();
  return true;
}

window.onload = function () {
  load_table();
  // load_images();
};

function load_table() {
  let curr_data_string = localStorage.getItem("table_data") || "[]";
  let curr_data = JSON.parse(curr_data_string);
  currentTable = document.getElementById("skills_table");
  currentTable.innerHTML = "";
  for (var i = 0; i < curr_data.length; i++) {
    currentTable.innerHTML += `<tr><td>${curr_data[i].name}</td><td>${curr_data[i].skill}</td><td>${curr_data[i].level}</td></tr>`;
  }
}

// function load_images() {
//   document.getElementById("page-container").innerHTML += `<img id="gallery" style="display: none;" src="./images/desktop0.png" alt="Polybar Themes" title="Polybar Themes">
//   <img id="gallery" style="display: none;" src="./images/desktop1.png" alt="Polybar Themes" title="Polybar Themes">
//   <img id="gallery" style="display: none;" src="./images/desktop2.png" alt="Polybar Themes" title="Polybar Themes">
//   <img id="gallery" style="display: none;" src="./images/desktop3.png" alt="Polybar Themes" title="Polybar Themes">
//   <img id="gallery" style="display: none;" src="./images/desktop4.png" alt="Polybar Themes" title="Polybar Themes">`
// }
