var key = 0;
function CycleImages(name) {
    console.log(name)
    key = (key+1)%5;
    var newname = "./images/desktop" + key + ".png";
    document.getElementById("gallery").src = newname;
}
