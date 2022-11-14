/* -- Objeto com os itens do DOM -- */
const dom = {
  input: document.querySelector(".j-nameInput"),
  select: document.querySelector(".j-select"),
  genButton: document.querySelector(".j-genBtn"),
};

/* -- Preenche o seletor com os modelos -- */
patterns.forEach((pattern, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.innerText = pattern.name;
  dom.select.appendChild(option);
});

/* -- Bloqueio e desbloqueio do botão -- */
dom.input.addEventListener("input", (e) => {
  if (e.currentTarget.value === "") {
    dom.genButton.classList.remove("active");
  } else {
    dom.genButton.classList.add("active");
  }
});
