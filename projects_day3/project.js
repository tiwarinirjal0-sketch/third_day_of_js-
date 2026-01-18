

// function box1click() {
//     document.getElementById("main").style.backgroundColor = "aqua";
// }

// function box2click() {
//     document.getElementById("main").style.backgroundColor = "rgb(223, 113, 40)";
// }

// function box3click() {
//     document.getElementById("main").style.backgroundColor = "rgb(58, 233, 102)"
// }

// function box4click() {
//     document.getElementById("main").style.backgroundColor = "greenyellow";
// }
// function box5click() {
//     document.getElementById("main").style.backgroundColor = "coral";
// }


// document.getElementById("box1").addEventListener("click", box1click);
// document.getElementById("box2").addEventListener("click", box2click);
// document.getElementById("box3").addEventListener("click", box3click);
// document.getElementById("box4").addEventListener("click", box4click);
// document.getElementById("box5").addEventListener("click", box5click);


const main = document.querySelector("#main");
const boxes = document.querySelectorAll(".boxes");

boxes.forEach(box =>{
        box.addEventListener("click", () =>{
        const boxColor = getComputedStyle(box).backgroundColor;
        main.style.backgroundColor = boxColor;
    });
});