import { Leon, Lobo, Oso, Serpiente, Aguila } from './Animal.js';

document.getElementById('btnRegistrar').addEventListener('click', async () => {
  const animalSelect = document.getElementById('animal');
  const edadSelect = document.getElementById('edad');
  const comentariosInput = document.getElementById('comentarios');

  const animal = animalSelect.value;
  const edad = edadSelect.value;
  const comentarios = comentariosInput.value;

  if (!animal || !edad || !comentarios) {
    alert('Todos los datos deben estar completados');
    return;
  }

  const response = await fetch('/animales');
  const data = await response.json();
  const animalData = data.animales.find(a => a.name === animal);

  let newAnimal;
  switch (animal) {
    case 'Leon':
      newAnimal = new Leon(animal, edad, animalData.imagen, comentarios, animalData.sonido);
      break;
    case 'Lobo':
      newAnimal = new Lobo(animal, edad, animalData.imagen, comentarios, animalData.sonido);
      break;
    case 'Oso':
      newAnimal = new Oso(animal, edad, animalData.imagen, comentarios, animalData.sonido);
      break;
    case 'Serpiente':
      newAnimal = new Serpiente(animal, edad, animalData.imagen, comentarios, animalData.sonido);
      break;
    case 'Aguila':
      newAnimal = new Aguila(animal, edad, animalData.imagen, comentarios, animalData.sonido);
      break;
  }

  addAnimalToTable(newAnimal);
  resetForm();
});

function addAnimalToTable(animal) {
  const animalTable = document.getElementById('Animales');
  const animalDiv = document.createElement('div');
  animalDiv.classList.add('participante');
  animalDiv.innerHTML = `
    <div class="card">
      <img src="assets/imgs/${animal.Img}" class="card-img-top" alt="${animal.Nombre}">
      <div class="card-body">
        <h5 class="card-title">${animal.Nombre}</h5>
        <p class="card-text">${animal.Edad}</p>
        <p class="card-text">${animal.comentarios}</p>
        <button class="btn btn-primary" onclick="playSound('${animal.Sonido}')">Reproducir sonido</button>
      </div>
    </div>
  `;
  animalDiv.addEventListener('click', () => showModal(animal));
  animalTable.appendChild(animalDiv);
}

function resetForm() {
  document.getElementById('animal').value = '';
  document.getElementById('edad').value = '';
  document.getElementById('comentarios').value = '';
}

function playSound(sound) {
  const player = document.getElementById('player');
  player.src = `assets/sounds/${sound}`;
  player.play();
}

function showModal(animal) {
  const modalBody = document.querySelector('.modal-body');
  modalBody.innerHTML = `
    <h5>${animal.Nombre}</h5>
    <img src="assets/imgs/${animal.Img}" alt="${animal.Nombre}" class="img-fluid">
    <p>Edad: ${animal.Edad}</p>
    <p>Comentarios: ${animal.comentarios}</p>
  `;
  $('#exampleModal').modal('show');
}
