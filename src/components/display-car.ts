import { showSvg } from '../_var/car-svg';
import redFlagImg from '../asset/resource/img/red-flag.png';
import { selectCarRequest } from '../async/select-car-request';
import { deleteCarRequest } from '../async/delete-car-request';

type Car = {
  name: string;
  color: string;
  id: number;
};

export function displayCar(car: Car) {
  const allCars = document.querySelector('.all-cars') as HTMLElement;
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

  const updateButton = document.querySelector('.update-button') as HTMLButtonElement;

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

  const inputTextCreate = document.querySelector('.input-text-create') as HTMLInputElement;

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
  carElement.style.fill = car.color;
  road.append(carElement);

  const redFlag = document.createElement('img');
  redFlag.src = redFlagImg;
  redFlag.classList.add('red-flag');
  road.append(redFlag);
}
