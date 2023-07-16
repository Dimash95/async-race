import './global.css';

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

//////// * mainButtons

const garagePageContent = document.createElement('div');
garagePageContent.classList.add('garage-page-content');
body.append(garagePageContent);

const mainButtons = document.createElement('div');
mainButtons.classList.add('main-buttons');
garagePageContent.append(mainButtons);

const createContainer = document.createElement('div');
createContainer.classList.add('create-container');
mainButtons.append(createContainer);

const createButton = document.createElement('button');
createButton.textContent = 'Create';
createContainer.append(createButton);

const updateContainer = document.createElement('div');
updateContainer.classList.add('update-container');
mainButtons.append(updateContainer);

const updateButton = document.createElement('button');
updateButton.textContent = 'Update';
updateContainer.append(updateButton);

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

const road = document.createElement('div');
road.classList.add('road');
garageContent.append(road);

const pointAButton = document.createElement('button');
pointAButton.textContent = 'A';
road.append(pointAButton);

const pointBButton = document.createElement('button');
pointBButton.textContent = 'B';
road.append(pointBButton);

const carSvg = document.querySelector('.boardMarkup') as HTMLDivElement;
carSvg.innerHTML = `&ltsvg xmlns="http://www.w3.org/2000/svg" id="pict" height="500" width="500"&gt
&ltcircle cx="300" cy="300" r="200" fill="black"/&gt
&lt/svg&gt`;
road.append(carSvg);

const redFlagImg = document.createElement('img');
redFlagImg.src = './assets/svg/red-flag.png';
road.append(redFlagImg);

fetch('http://127.0.0.1:3000/garage?_page=2&_limit=1')
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
