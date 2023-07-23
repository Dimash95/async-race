import './global.css';
import redFlagImg from './asset/resource/svg/red-flag.png';
import { showSvg } from './car-svg';
showSvg();

//////// * mainButtons

const body = document.querySelector('body') as HTMLElement;

const garageAndWinnersButtons = document.createElement('div');
garageAndWinnersButtons.classList.add('garage-winners-buttons');
body.append(garageAndWinnersButtons);

const garageButton = document.createElement('button');
garageButton.textContent = 'Garage';
garageButton.classList.add('garage-button');
garageAndWinnersButtons.append(garageButton);

const winnersButton = document.createElement('button');
winnersButton.textContent = 'Winners';
winnersButton.classList.add('winners-button');
garageAndWinnersButtons.append(winnersButton);

// winnersButton.disabled = false;

const garagePageContent = document.createElement('div');
garagePageContent.classList.add('garage-page-content');
body.append(garagePageContent);

const winnersPageContent = document.createElement('div');
winnersPageContent.classList.add('winners-page-content');
winnersPageContent.textContent = 'WINNERS';
winnersPageContent.classList.add('disabled');
body.append(winnersPageContent);

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

function showQuantityCars() {
  const allCars = document.querySelectorAll('.car-full-container');
  garageTitle.textContent = `Garage (${allCars.length})`;
}

////////////// * GARAGE AND WINNER

winnersButton.addEventListener('click', () => {
  garagePageContent.classList.add('disabled');
  winnersPageContent.classList.remove('disabled');
});

garageButton.addEventListener('click', () => {
  winnersPageContent.classList.add('disabled');
  garagePageContent.classList.remove('disabled');
});

//////// * GET CARS

type Car = {
  name: string;
  color: string;
  id: number;
};

function getCars() {
  fetch('http://127.0.0.1:3000/garage?_page=1&_limit=7')
    .then((resp) => resp.json())
    .then(function (data: Car[]) {
      data.forEach((car) => {
        createCar(car.color, car.name);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}
getCars();

type Speed = {
  velocity: number;
  distance: number;
};

// type isSuccess = {
//   success: true;
// };

race.addEventListener('click', async () => {
  // const car = document.querySelector('.car');
  // const time = await
  fetch('http://127.0.0.1:3000/engine?status=started&id=1', { method: 'PATCH' })
    .then((resp) => resp.json())
    .then(function (data: Speed) {
      return data.distance / data.velocity;
    })
    .catch(function (error) {
      console.log(error);
      return 0;
    });

  // add animation

  await fetch('http://127.0.0.1:3000/engine?status=drive&id=1', { method: 'PATCH' })
    .then((res) => {
      if (!res.ok) {
        {
          if (res.status === 500) {
            // stop animation
          }

          throw Error(res.statusText);
        }
      }
      return res;
    })
    // .then((resp) => resp.json())
    /*   .then(function (data: isSuccess) {
   // return data.distance / data.velocity
  }) */
    .catch(function (error: Error) {
      console.log(error);
      return 0;
    });
});

//////// * generate car
let id = 0;

function createCar(color = '#ffffff', name = 'car') {
  const carFullContainer = document.createElement('div');
  carFullContainer.setAttribute('id', `${id}`);
  carFullContainer.setAttribute('isSelected', 'false');
  carFullContainer.classList.add('car-full-container');
  allCars.append(carFullContainer);

  const selectRemoveCarName = document.createElement('div');
  selectRemoveCarName.classList.add('select-remove-car-name');
  carFullContainer.append(selectRemoveCarName);

  const selectButton = document.createElement('button');
  selectButton.textContent = 'Select';
  selectButton.classList.add('select-button');
  selectRemoveCarName.append(selectButton);

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove-button');
  removeButton.setAttribute('data-id', `${id}`);
  id++;
  selectRemoveCarName.append(removeButton);

  const carName = document.createElement('div');
  carName.classList.add('car-name');
  carName.textContent = name; // inputTextCreate.value;
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
  car.style.fill = color; // inputColorCreate.value;
  road.append(car);

  const redFlag = document.createElement('img');
  redFlag.src = redFlagImg;
  redFlag.classList.add('red-flag');
  road.append(redFlag);

  removeContainer(document.querySelectorAll('.remove-button'), document.querySelectorAll('.car-full-container'));
  pressSelectButton(
    document.querySelectorAll('.select-button'),
    document.querySelectorAll('.car'),
    document.querySelectorAll('.car-name')
  );
  showQuantityCars();
  displayPage();
  displayPageNumbers();
  showPage();
}

createButton.addEventListener('click', () => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const body = JSON.stringify({ name: inputTextCreate.value, color: inputColorCreate.value });

  fetch('http://127.0.0.1:3000/garage', { method: 'POST', headers, body })
    .then((resp) => resp.json())
    .then(function (data: Car) {
      createCar(data.color, data.name);
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

////////// * GENERATE 100 CARS

generateCars.addEventListener('click', () => {
  for (let i = 0; i < 100; i++) {
    createCar();
  }
});

////////// * SELECT BUTTON
let selectedId = 0;

function pressSelectButton(
  selectButtonsAll: NodeListOf<Element>,
  carAll: NodeListOf<HTMLDivElement>,
  carNameAll: NodeListOf<Element>
) {
  for (let i = 0; i < selectButtonsAll.length; i++) {
    selectButtonsAll[i].addEventListener('click', () => {
      selectedId = i;
    });
  }

  // function updateCar() {
  updateButton.addEventListener('click', () => {
    //   const x = carAll[selectedId]

    console.log(carAll[selectedId].style);
    carAll[selectedId].style.fill = inputColorUpdate.value;

    carNameAll[selectedId].textContent = inputTextUpdate.value;
    console.log(inputTextUpdate.value);

    inputTextUpdate.value = '';
  });
}
// }

////////// * REMOVE BUTTON

function removeContainer(removeButtons: NodeListOf<Element>, carFullContainer: NodeListOf<Element>) {
  for (let i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener('click', () => {
      carFullContainer[i].remove();
      showQuantityCars();
    });
  }
}

////////////// * PAGINATION

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
  const liAll = document.querySelectorAll('.li');

  liAll.forEach((e, index) => {
    e.addEventListener('click', () => {
      currentPage = index + 1;
      pageNumber.textContent = `Page #${currentPage}`;
      displayPage();
    });
  });
}

////////////// * ASYNC
