var img = document.getElementById("img");
var box = document.getElementById("box");
var box2 = document.getElementById("box2");
var vid = document.getElementById("vid");
img.onclick = function(){
    box.style.display = "none";
    box2.style.display = "block";
    vid.play()
}