const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const body = document.querySelector("body");
const btn = document.querySelector('#btn');


btn.addEventListener('click', (e) => {
  e.preventDefault();
  body.style.backgroundColor = color;
})
