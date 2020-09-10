const oldText = "Old Text";
const newText = "New Text";

document.getElementById("inp").addEventListener("input", (e) => console.log(e.target.value));

document.getElementById("btn").addEventListener("click", (e) => e.target.value === newText ?  e.target.value = oldText : e.target.value = newText);

function DecreaseOpacity(elem, opacity = 1) {  
    if (opacity > 0) {
       opacity -= .1;
       setTimeout(function(){DecreaseOpacity(elem, opacity)},100);
    }
    elem.style.opacity = opacity;
 }

 function IncreaseOpacity(elem, opacity = 0) {
    if (opacity < 1) {
       opacity += .1;
       setTimeout(function(){IncreaseOpacity(elem, opacity)},100);
    }
    elem.style.opacity = opacity;
 }

document.getElementById("img").addEventListener("mouseover",(e) => {
    DecreaseOpacity(e.target);
});

document.getElementById("img").addEventListener("mouseout",(e) => {
    IncreaseOpacity(e.target);
});


