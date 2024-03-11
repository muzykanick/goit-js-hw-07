function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


  const controlsDiv = document.getElementById("controls");
  const inputNumber = document.querySelector("input");
  const createButton = document.querySelector("[data-create]");
  const destroyButton = document.querySelector("[data-destroy]");
  const boxesDiv = document.getElementById("boxes");

  createButton.addEventListener("click", function () {
    const amount = parseInt(inputNumber.value);

    if (amount < 1 || amount > 100 || isNaN(amount)) {
      return;
    }

    createBoxes(amount);
    inputNumber.value = "";
  });

  destroyButton.addEventListener('click', destroyBoxes);

  function createBoxes(amount) {
    const boxSize = 30;
    boxesDiv.innerHTML = '';

    for (let i = 0; i < amount; i += 1 ) {
      const box = document.createElement("div");
      box.style.width = `${boxSize + i * 10}px`;
      box.style.height = `${boxSize + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesDiv.appendChild(box);
    }
  }

  function destroyBoxes() {
    boxesDiv.innerHTML = "";
  }
