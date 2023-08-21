const button = document.getElementById("generates");
const grid = document.getElementById("grid");

button.addEventListener("click", function () {
  generateGrid();
});

function generateGrid() {
  for (let index = 1; index <= 100; index++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerHTML = index;

    grid.append(cell);

    cell.addEventListener("click", function () {
      cell.classList.add(azure);
      console.log(index);
    });
  }
}
