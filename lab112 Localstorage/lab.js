let box = document.querySelectorAll("li");
let box2 = document.querySelector(".box");
if (window.localStorage.getItem("color")) {
  box2.style.backgroundColor = window.localStorage.getItem("color");
  box.forEach((elme) => {
    elme.classList.remove("Active");
  });
  document.querySelector(`[data-coloor="${window.localStorage.getItem("color")}"]`).classList.add("Active")
 
} else {
  box2.style.backgroundColor = red;
}

box.forEach((elm) => {
  elm.addEventListener("click", (e) => {
    box.forEach((elme) => {
      console.log(elme);
      elme.classList.remove("Active");
    });
    e.target.classList.add("Active");

    window.localStorage.setItem("color", e.target.dataset.coloor);
    box2.style.backgroundColor = e.target.dataset.coloor;
  });
});
