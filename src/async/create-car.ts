import { displayCar } from '../components/display-car';
import { showQuantityCars } from './show-quantity-cars';

type Car = {
  name: string;
  color: string;
  id: number;
};

export function createCar() {
  const createButton = document.querySelector('.button-create') as HTMLButtonElement;
  const inputTextCreate = document.querySelector('.input-text-create') as HTMLInputElement;
  const inputColorCreate = document.querySelector('.input-color-create') as HTMLInputElement;

  createButton.addEventListener('click', async () => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const body = JSON.stringify({ name: inputTextCreate.value, color: inputColorCreate.value });

    await fetch('http://127.0.0.1:3000/garage', { method: 'POST', headers, body })
      .then((resp) => resp.json())
      .then((car: Car) => {
        displayCar(car);
      })
      .catch(function (error) {
        console.log(error);
      });
    await showQuantityCars();
  });
}
