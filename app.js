document.addEventListener("DOMContentLoaded", () => {

  function boardsize(size= 32*44, s =  'medium-grid-default') {
    const sketchpad = document.getElementById("sketchpad");
    sketchpad.innerHTML = '';

    sketchpad.classList.remove("small-grid", "medium-grid-default", "large-grid");
    sketchpad.classList.add(s);
    console.log(sketchpad.classList)

    for (let i = 0; i < size; i += 1) {
      const div = document.createElement("div");
      sketchpad.appendChild(div);
    }
  }

  function getScreenSize() {
    const ssize = document.getElementById("small");
    const msize = document.getElementById("medium");
    const lsize = document.getElementById("large");

    ssize.addEventListener("click", () => boardsize(16 * 22,"small-grid"));
    msize.addEventListener("click", () => boardsize(32 * 44,"medium-grid-default"));
    lsize.addEventListener("click", () => boardsize(64 * 88,"large-grid"));
  }


  

  function startGame() {
    boardsize();
    getScreenSize();
    changeSize();
  }

  startGame();
});
