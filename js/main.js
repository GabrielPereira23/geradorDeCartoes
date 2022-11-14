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

/* -- Função que gera o cartão -- */
function genCard(name, pattern, callback) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const { width, height, x, y, imgFile, font, color, quality } = pattern;
  canvas.width = width;
  canvas.height = height;
  const image = new Image();
  image.src = imgFile;
  image.onload = () => {
    ctx.drawImage(image, 0, 0);
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.fillText(name, x, y);
    callback(
      canvas.toDataURL("image/jpeg", quality).replace("image/jpg", "image/octet-stream")
    );
  };
}