const openModalBtn = document.querySelector("#openModalBtn");
const modalWrapper = document.querySelector("#modalWrapper");
const modalCloseIcon = document.querySelector;

openModalBtn.addEventListener("click", () => {
  modalWrapper.classList.remove("hidden");
});

modalCloseIcon.addEventListener("click", () => {
  modalWrapper.classList.add("hidden");
});
