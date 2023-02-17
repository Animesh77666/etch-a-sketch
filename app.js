document.addEventListener("DOMContentLoaded", () => {


  function boardsize() {
    const sketchpad = document.getElementById("sketchpad");
    size = 32 * 44

    sketchpad.classList.remove(
      "small-grid",
      "medium-grid-default",
      "big-grid"
    );
    sketchpad.classList.add("medium-grid-default");

    for (let i = 0; i < size; i += 1) {
        const div = document.createElement('div');
        sketchpad.appendChild(div);
      }
  }

  boardsize();
});
