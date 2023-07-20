import './global.css';
import redFlagImg from './asset/resource/svg/red-flag.png';
import garageWinners from './components/garage-winners/garage-winners';
garageWinners();
import { showSvg } from './car-svg';
showSvg();

//////// * mainButtons

const body = document.querySelector('body') as HTMLElement;

const garagePageContent = document.createElement('div');
garagePageContent.classList.add('garage-page-content');
body.append(garagePageContent);

const mainButtons = document.createElement('div');
mainButtons.classList.add('main-buttons');
garagePageContent.append(mainButtons);

const createContainer = document.createElement('div');
createContainer.classList.add('create-container');
mainButtons.append(createContainer);

const inputTextCreate = document.createElement('input');
inputTextCreate.classList.add('input-text-create');
inputTextCreate.type = 'text';
createContainer.append(inputTextCreate);

const inputColorCreate = document.createElement('input');
inputColorCreate.classList.add('input-color-create');
inputColorCreate.type = 'color';
createContainer.append(inputColorCreate);

const createButton = document.createElement('button');
createButton.classList.add('button-create');
createButton.textContent = 'Create';
createContainer.append(createButton);

const updateContainer = document.createElement('div');
updateContainer.classList.add('update-container');
mainButtons.append(updateContainer);

const inputTextUpdate = document.createElement('input');
inputTextUpdate.classList.add('input-text-update');
inputTextUpdate.type = 'text';
updateContainer.append(inputTextUpdate);

const inputColorUpdate = document.createElement('input');
inputColorUpdate.classList.add('input-color-update');
inputColorUpdate.type = 'color';
updateContainer.append(inputColorUpdate);

const updateButton = document.createElement('button');
updateButton.textContent = 'Update';
updateContainer.append(updateButton);

//////// * race-reset-generate-cars

const raceResetGenerateCars = document.createElement('div');
raceResetGenerateCars.classList.add('race-reset-generate-cars');
mainButtons.append(raceResetGenerateCars);

const race = document.createElement('button');
race.textContent = 'Race';
raceResetGenerateCars.append(race);

const reset = document.createElement('button');
reset.textContent = 'Reset';
raceResetGenerateCars.append(reset);

const generateCars = document.createElement('button');
generateCars.textContent = 'Generate cars';
raceResetGenerateCars.append(generateCars);

generateCars.addEventListener('click', () => {
  for (let i = 0; i < 100; i++) {
    createCar();
  }
});

//////// * Cars title

const garageContent = document.createElement('div');
garageContent.classList.add('garage-content');
garagePageContent.append(garageContent);

const garageTitle = document.createElement('h2');
garageTitle.textContent = 'Garage ()';
garageContent.append(garageTitle);

const pageNumber = document.createElement('p');
pageNumber.textContent = 'Page #1';
garageContent.append(pageNumber);

const allCars = document.createElement('div');
allCars.classList.add('all-cars');
garageContent.append(allCars);

//////// * generate car
let id = 0;

// const carFullContainerContent = `<div class="select-remove-car-name">
//     <button>Select</button>
//     <button class="remove-button">Remove</button>
//     <div id="car-name-${id}" class="car-name"></div>
//   </div>
//   <div class="road-container">
//     <div class="road-buttons">
//       <button>A</button>
//       <button>B</button>
//     </div>
//     <div class="full-road">
//       <div class="road">
//         <div class="car"></div>
//         <img class="red-flag" src="${redFlagImg}"/>
//       </div>
//     </div>
//   </div>`;
// const carFullContainer = document.createElement('div');
// carFullContainer.innerHTML = carFullContainerContent;
// allCars.append(carFullContainer);
console.log(allCars);

function createCar() {
  const carFullContainer = document.createElement('div');
  carFullContainer.setAttribute('id', `${id}`);
  carFullContainer.classList.add('car-full-container');
  allCars.append(carFullContainer);

  const selectRemoveCarName = document.createElement('div');
  selectRemoveCarName.classList.add('select-remove-car-name');
  carFullContainer.append(selectRemoveCarName);

  const select = document.createElement('button');
  select.textContent = 'Select';
  selectRemoveCarName.append(select);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove-button');
  removeButton.setAttribute('data-id', `${id}`);
  id++;
  selectRemoveCarName.append(removeButton);

  const carName = document.createElement('div');
  carName.textContent = inputTextCreate.value;
  inputTextCreate.value = '';
  selectRemoveCarName.append(carName);

  const roadContainer = document.createElement('div');
  roadContainer.classList.add('road-container');
  carFullContainer.append(roadContainer);

  const roadButtons = document.createElement('div');
  roadButtons.classList.add('road-buttons');
  roadContainer.append(roadButtons);

  const pointAButton = document.createElement('button');
  pointAButton.textContent = 'A';
  roadButtons.append(pointAButton);

  const pointBButton = document.createElement('button');
  pointBButton.textContent = 'B';
  roadButtons.append(pointBButton);

  const fullRoad = document.createElement('div');
  fullRoad.classList.add('full-road');
  roadContainer.append(fullRoad);

  const road = document.createElement('div');
  road.classList.add('road');
  fullRoad.append(road);

  const car = document.createElement('div');
  car.classList.add('car');
  car.innerHTML = showSvg();
  car.style.fill = inputColorCreate.value;
  road.append(car);

  const redFlag = document.createElement('img');
  redFlag.src = redFlagImg;
  redFlag.classList.add('red-flag');
  road.append(redFlag);

  removeContainer(document.querySelectorAll('.remove-button'), document.querySelectorAll('.car-full-container'));
  showQuantityCars();
  displayPage();
  displayPageNumbers();
  showPage();
}

createButton.addEventListener('click', createCar);

function removeContainer(removeButtons: NodeListOf<Element>, carFullContainer: NodeListOf<Element>) {
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', () => {
      carFullContainer[i].remove();
      showQuantityCars();
    });
  }
}

function showQuantityCars() {
  const allCars = document.querySelectorAll('.car-full-container');
  garageTitle.textContent = `Garage (${allCars.length})`;
}

const paginationContainer = document.createElement('div');
paginationContainer.classList.add('pagination-container');
garageContent.append(paginationContainer);

const pagination = document.createElement('div');
pagination.classList.add('pagination');
paginationContainer.append(pagination);

const pageNumbers = document.createElement('ul');
pagination.append(pageNumbers);

const CAR_ROWS = 7;
let currentPage = 1;

////////////// * pagination

function displayPage() {
  const start = currentPage * CAR_ROWS - CAR_ROWS;
  const end = start + CAR_ROWS;
  const paginatedData = [...allCars.children].slice(start, end);

  [...allCars.children].forEach((e) => {
    e.classList.add('disabled');
  });

  paginatedData.forEach((e) => {
    e.classList.remove('disabled');
  });
}

function displayPageNumbers() {
  const pages = Math.ceil(allCars.children.length / CAR_ROWS);

  const liAll = document.querySelectorAll('.li');

  liAll.forEach((e) => {
    pageNumbers.removeChild(e);
  });

  for (let i = 1; i <= pages; i++) {
    const li = document.createElement('li');
    li.classList.add('li');
    li.innerHTML = i.toString();
    pageNumbers.appendChild(li);
  }
}

function showPage() {
  console.log(allCars);

  const liAll = document.querySelectorAll('.li');

  liAll.forEach((e, index) => {
    e.addEventListener('click', () => {
      currentPage = index + 1;
      displayPage();
    });
  });
}
