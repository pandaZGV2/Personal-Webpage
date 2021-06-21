function CycleImages(name) {
    console.log(name)
  switch (name) {
    case "./images/desktop.png":
      document.getElementById("gallery").getAttribute("src") = "./images/desktop1.png";
      break;
    case "./images/desktop1.png":
      document.getElementById("gallery").getAttribute("src") = "./images/desktop2.png";
      break;
    case "./images/desktop2.png":
      document.getElementById("gallery").getAttribute("src") = "./images/desktop3.png";
      break;
    case "./images/desktop3.png":
      document.getElementById("gallery").getAttribute("src") = "./images/desktop4.png";
      break;
    case "./images/desktop4.png":
      document.getElementById("gallery").getAttribute("src") = "./images/desktop.png";
      break;
  }
}
