import './global.css';
import garageWinners from './components/garage-winners/garage-winners';
garageWinners();

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

//////// * generate car

const selectRemoveCarName = document.createElement('div');
selectRemoveCarName.classList.add('select-remove-car-name');
garageContent.append(selectRemoveCarName);

const select = document.createElement('button');
select.textContent = 'Select';
selectRemoveCarName.append(select);

const remove = document.createElement('button');
remove.textContent = 'Remove';
selectRemoveCarName.append(remove);

const carName = document.createElement('div');
carName.textContent = 'Tesla';
selectRemoveCarName.append(carName);

const roadContainer = document.createElement('div');
roadContainer.classList.add('road-container');
garageContent.append(roadContainer);

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

const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 640 512"><style>svg{fill:green}</style><path d="M171.3 96H224v96H111.3l30.4-75.9C146.5 104 158.2 96 171.3 96zM272 192V96h81.2c9.7 0 18.9 4.4 25 12l67.2 84H272zm256.2 1L428.2 68c-18.2-22.8-45.8-36-75-36H171.3c-39.3 0-74.6 23.9-89.1 60.3L40.6 196.4C16.8 205.8 0 228.9 0 256V368c0 17.7 14.3 32 32 32H65.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H385.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H608c17.7 0 32-14.3 32-32V320c0-65.2-48.8-119-111.8-127zM434.7 368a48 48 0 1 1 90.5 32 48 48 0 1 1 -90.5-32zM160 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>`;

const car = document.createElement('div');
car.classList.add('car');
car.innerHTML = svg;
car.style.fill = 'red';
road.append(car);

const redFlag = document.createElement('img');
import redFlagImg from './asset/resource/svg/red-flag.png';
redFlag.src = redFlagImg;
redFlag.classList.add('red-flag');
road.append(redFlag);
