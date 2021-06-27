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
function Addtotable() {
  let table_entry = { name: "", skill: "", level: "" };
  table_entry.name = document.getElementById("name").value;
  table_entry.skill = document.getElementById("skill").value;
  table_entry.level = document.getElementById("level").value;
  document.getElementById("skills").reset();
  let curr_data_string = localStorage.getItem("table_data") || "[]";
  let curr_data = JSON.parse(curr_data_string);
  curr_data.push(table_entry);
  let new_data_string = JSON.stringify(curr_data);
  localStorage.setItem("table_data", new_data_string);

  currentTable = document.getElementById("skills_table");
  currentTable.innerHTML = "";
  curr_data.forEach((element) => {
    currentTable.innerHTML += `<tr><td>${element.name}</td><td>${element.skill}</td><td>${element.level}</td>`;
  });
}

window.onload = function () {
  load_table();
};

function load_table() {
  let curr_data_string = localStorage.getItem("table_data") || "[]";
  let curr_data = JSON.parse(curr_data_string);
  currentTable = document.getElementById("skills_table");
  currentTable.innerHTML = "";
  curr_data.forEach((element) => {
    currentTable.innerHTML += `<tr><td>${element.name}</td><td>${element.skill}</td><td>${element.level}</td>`;
  });
}
