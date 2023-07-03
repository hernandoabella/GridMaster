const gridTemplateColumnsInput = document.getElementById(
  "grid-template-columns"
);
const gridTemplateRowsInput = document.getElementById("grid-template-rows");
const justifyItemsSelect = document.getElementById("justify-items");
const alignItemsSelect = document.getElementById("align-items");
const container = document.querySelector(".container");

gridTemplateColumnsInput.addEventListener("input", () => {
  container.style.gridTemplateColumns = gridTemplateColumnsInput.value;
});

gridTemplateRowsInput.addEventListener("input", () => {
  container.style.gridTemplateRows = gridTemplateRowsInput.value;
});

justifyItemsSelect.addEventListener("change", () => {
  container.style.justifyItems = justifyItemsSelect.value;
});

alignItemsSelect.addEventListener("change", () => {
  container.style.alignItems = alignItemsSelect.value;
});
