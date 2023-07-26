import './global.css';
import redFlagImg from './asset/resource/svg/red-flag.png';
import { showSvg } from './car-svg';
showSvg();

type Car = {
  name: string;
  color: string;
  id: number;
};

type Speed = {
  velocity: number;
  distance: number;
};

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

// function showQuantityCars() {
//   const allCars = document.querySelectorAll('.car-full-container');
//   garageTitle.textContent = `Garage ${allCars.length}`;
// }
// showQuantityCars();

////////////// * GARAGE AND WINNER

winnersButton.addEventListener('click', () => {
  garagePageContent.classList.add('disabled');
  winnersPageContent.classList.remove('disabled');
});

garageButton.addEventListener('click', () => {
  winnersPageContent.classList.add('disabled');
  garagePageContent.classList.remove('disabled');
});

//////// * generate car

function displayCar(car: Car) {
  const carFullContainer = document.createElement('div');
  carFullContainer.setAttribute('id', `${car.id}`);
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

  selectButton.addEventListener('click', () => {
    updateButton.addEventListener('click', () => {
      selectCarRequest(car.id);
      window.location.reload();
    });
  });

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove';
  removeButton.classList.add('remove-button');
  removeButton.setAttribute('data-id', `${car.id}`);
  selectRemoveCarName.append(removeButton);

  removeButton.addEventListener('click', () => {
    deleteCarRequest(car.id).then(() => {
      carFullContainer.remove();
    });
    window.location.reload();
  });

  const carName = document.createElement('div');
  carName.classList.add('car-name');
  carName.textContent = car.name;
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

  const carElement = document.createElement('div');
  carElement.classList.add('car');
  carElement.innerHTML = showSvg();
  carElement.style.fill = car.color; // inputColorCreate.value;
  road.append(carElement);

  const redFlag = document.createElement('img');
  redFlag.src = redFlagImg;
  redFlag.classList.add('red-flag');
  road.append(redFlag);
}

//////// * GET CARS

async function getCars(page = 1) {
  await fetch(`http://127.0.0.1:3000/garage?_page=${page}&_limit=7`)
    .then((res) => {
      garageTitle.textContent = `Garage ${res.headers.get('X-Total-Count')}`;
      return res;
    })
    .then((resp) => resp.json())
    .then(function (cars: Car[]) {
      cars.forEach((car) => {
        displayCar(car);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  await displayPageNumbers();
}
getCars();

async function showQuantityCars() {
  const response = await fetch(`http://127.0.0.1:3000/garage?_page=${1}&_limit=7`, { method: 'GET' });
  const totalCount = response.headers.get('X-Total-Count');

  garageTitle.textContent = `Garage ${totalCount}`;

  return +(totalCount ?? 0);
}

////////// * CREATE CAR

createButton.addEventListener('click', async () => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const body = JSON.stringify({ name: inputTextCreate.value, color: inputColorCreate.value });

  await fetch('http://127.0.0.1:3000/garage', { method: 'POST', headers, body })
    .then((resp) => resp.json())
    .then((car: Car) => {
      displayCar(car); // { id: number, name: string, color: string }
    })
    .catch(function (error) {
      console.log(error);
    });
  await showQuantityCars();
});

////////// * SELECT CAR

function selectCarRequest(carId: number) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const body = JSON.stringify({ name: inputTextUpdate.value, color: inputColorUpdate.value });

  fetch(`http://127.0.0.1:3000/garage/${carId}`, { method: 'PUT', headers, body })
    .then((resp) => resp.json())
    .then((car: Car) => {
      car.color = inputColorUpdate.value;
      car.name = inputTextUpdate.value;
    })
    .catch(function (error) {
      console.log(error);
    });
}

////////// * DELETE CAR

async function deleteCarRequest(carId: number): Promise<void> {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  await fetch(`http://127.0.0.1:3000/garage/${carId}`, { method: 'DELETE', headers });
  // const total = +(garageTitle.textContent?.split(' ')[1] ?? 0);
  // garageTitle.textContent = `Garage ${total - 1}`;
  await getCars();
}

////////// * GENERATE 100 CARS

generateCars.addEventListener('click', async () => {
  for (let i = 0; i < 100; i++) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const randomColor =
      '#' +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')
        .toUpperCase();

    const randomName = randomCarName[i];
    const body = JSON.stringify({ name: randomName, color: randomColor });

    await fetch('http://127.0.0.1:3000/garage', { method: 'POST', headers, body })
      .then((resp) => resp.json())
      .then((car: Car) => {
        displayCar(car); // { id: number, name: string, color: string }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  window.location.reload();
});

////////////// * START

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

async function displayPageNumbers() {
  const totalCount = await showQuantityCars();
  const pages = Math.ceil(totalCount / CAR_ROWS);

  const liAll = document.querySelectorAll('.li');

  liAll.forEach((e) => {
    pageNumbers.removeChild(e);
  });

  for (let i = 1; i <= pages; i++) {
    const li = document.createElement('li');
    li.classList.add('li');
    li.innerHTML = i.toString();
    pageNumbers.appendChild(li);

    li.addEventListener('click', () => {
      currentPage = i;

      pageNumber.textContent = `Page #${currentPage}`;
      allCars.innerHTML = '';
      getCars(currentPage);
    });
  }
}

////////////// * RANDOM CAR

const randomCarName = [
  'Toyota Camry',
  'Honda Accord',
  'Ford Mustang',
  'Chevrolet Corvette',
  'Nissan Rogue',
  'BMW X5',
  'Mercedes-Benz C-Class',
  'Volkswagen Golf',
  'Audi Q7',
  'Hyundai Sonata',
  'Subaru Outback',
  'Kia Soul',
  'Mazda CX-5',
  'Jeep Wrangler',
  'Lexus RX',
  'Tesla Model S',
  'GMC Sierra',
  'Chrysler Pacifica',
  'Buick Enclave',
  'Acura TLX',
  'Infiniti Q50',
  'Cadillac Escalade',
  'Mini Cooper',
  'Porsche 911',
  'Jaguar F-Pace',
  'Land Rover Discovery',
  'Bentley Continental',
  'Rolls-Royce Phantom',
  'Aston Martin DB11',
  'McLaren 720S',
  'Ferrari 488',
  'Lamborghini Huracan',
  'Maserati Quattroporte',
  'Alfa Romeo Giulia',
  'Peugeot 308',
  'Renault Captur',
  'Citroen C3',
  'Fiat 500',
  'Opel Astra',
  'Skoda Octavia',
  'Seat Leon',
  'Volvo XC60',
  'Saab 9-3',
  'Mitsubishi Outlander',
  'Daihatsu Terios',
  'Suzuki Swift',
  'Subaru Forester',
  'Dacia Duster',
  'Lada Niva',
  'Geely Emgrand',
  'BYD Tang',
  'Chery Tiggo',
  'SsangYong Korando',
  'Proton Persona',
  'Tata Nexon',
  'Mahindra XUV500',
  'Kia Carnival',
  'Hyundai Santa Fe',
  'Genesis G70',
  'Infiniti QX80',
  'Acura MDX',
  'Buick Encore',
  'Lexus NX',
  'Lincoln Navigator',
  'Tesla Model X',
  'GMC Terrain',
  'Chrysler 300',
  'Jeep Grand Cherokee',
  'Ford Explorer',
  'Nissan Pathfinder',
  'Honda Pilot',
  'Toyota Highlander',
  'Mazda CX-9',
  'Subaru Ascent',
  'Kia Sorento',
  'Hyundai Tucson',
  'BMW X3',
  'Mercedes-Benz GLC',
  'Volkswagen Tiguan',
  'Audi Q5',
  'Porsche Macan',
  'Jaguar E-Pace',
  'Land Rover Defender',
  'Bentley Bentayga',
  'Rolls-Royce Cullinan',
  'Aston Martin DBX',
  'McLaren GT',
  'Ferrari Roma',
  'Lamborghini Urus',
  'Maserati Levante',
  'Alfa Romeo Stelvio',
  'Peugeot 508',
  'Renault Talisman',
  'Citroen C5',
  'Fiat Tipo',
  'Opel Insignia',
  'Skoda Superb',
  'Seat Ateca',
  'Volvo V90',
  'Saab 9-5',
];
