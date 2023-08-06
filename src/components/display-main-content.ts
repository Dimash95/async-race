export function displayMainContent() {
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
  inputColorUpdate.classList.add('update-button');
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
  generateCars.classList.add('generate-cars');
  generateCars.textContent = 'Generate cars';
  raceResetGenerateCars.append(generateCars);

  //////// * Cars title

  const garageContent = document.createElement('div');
  garageContent.classList.add('garage-content');
  garagePageContent.append(garageContent);

  const garageTitle = document.createElement('h2');
  garageTitle.classList.add('garage-title');
  garageTitle.textContent = 'Garage ()';
  garageContent.append(garageTitle);

  const pageNumber = document.createElement('p');
  pageNumber.classList.add('page-number');
  garageContent.append(pageNumber);

  const allCars = document.createElement('div');
  allCars.classList.add('all-cars');
  garageContent.append(allCars);
  pageNumber.textContent = `Page #${1}`;

  ////////////// * PAGINATION

  const paginationContainer = document.createElement('div');
  paginationContainer.classList.add('pagination-container');
  garageContent.append(paginationContainer);

  const pagination = document.createElement('div');
  pagination.classList.add('pagination');
  paginationContainer.append(pagination);

  const pageNumbers = document.createElement('ul');
  pageNumbers.classList.add('page-numbers');
  pagination.append(pageNumbers);
}
