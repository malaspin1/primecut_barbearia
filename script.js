function linksmenu() {
  const menu = document.getElementById("headerlinks");
  const header = document.getElementById("header");

  if (menu.style.display != "flex") {
    menu.style.display = "flex";
    header.style.flexDirection = "column";
    header.style.height = "40vh";
  } else {
    menu.style.display = "none";
    header.style.flexDirection = "row";
    header.style.height = "14vh";
  }
}

function autualizarheader() {
  const menu = document.getElementById("headerlinks");
  const header = document.getElementById("header");
  if (header.style.height == "40vh") {
    menu.style.display = "none";
    header.style.flexDirection = "row";
    header.style.height = "14vh";
  }
}
