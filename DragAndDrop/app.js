const leftBox = document.getElementById("left");
const rightBox = document.getElementById("right");
const list = document.querySelectorAll(".list");

let selected = null;

list.forEach((lists) => {
  lists.addEventListener("dragstart", (e) => {
    selected = e.target;
  });
});

rightBox.addEventListener("dragover", (e) => {
  e.preventDefault();
});

rightBox.addEventListener("drop", () => {
  rightBox.appendChild(selected);
  selected = null;
});

leftBox.addEventListener("dragover", (e) => {
  e.preventDefault();
});

leftBox.addEventListener("drop", () => {
  leftBox.appendChild(selected);
  selected = null;
});
