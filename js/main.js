/* -- Objeto com os itens do DOM -- */
const dom = {
  select: document.querySelector('.j-select'),
}

/* -- Preenche o seletor com os modelos -- */
patterns.forEach((pattern, index) => {
  const option = document.createElement('option');
  option.value = index;
  option.innerText = pattern.name;
  dom.select.appendChild(option);
});

