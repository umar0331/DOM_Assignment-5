//Task 1
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  alert("Button Clicked Successfully");
});

//Task 2
let pra = document.getElementById("pra");
let btns = document.getElementById("btns");

btns.addEventListener("click", function () {
  pra.innerText = "Text Updated Successfully";
});

//Task 3
let all = document.body;
let btt = document.getElementById("btnb");
btt.addEventListener("click", function () {
  all.style.backgroundColor = "black";
  all.style.color = "white";
});

//Task 4
let inp = document.getElementById("inp");
let pp = document.getElementById("em");

inp.addEventListener("input", function () {
  pp.innerText = inp.value;
});
//Task 5
let devv = document.getElementById("dev");
devv.addEventListener("mouseenter", function () {
  devv.style.width = "15%";
  devv.style.height = "23vh";
  devv.style.backgroundColor = "rgb(14, 102, 73)";
});

devv.addEventListener("mouseleave", function () {
  devv.style.width = "15%";
  devv.style.height = "23vh";
  devv.style.backgroundColor = "white";
});

//Task 6
let btnn = document.getElementById("btnn");

btnn.addEventListener("dblclick", function () {
  alert("Double Click Detected");
});
