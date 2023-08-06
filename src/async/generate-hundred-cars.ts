import { One_Hundred_Cars } from '../_var/one_hundred_cars';
import { displayCar } from '../components/display-car';

type Car = {
  name: string;
  color: string;
  id: number;
};

export function generateHundredCars() {
  const generateCars = document.querySelector('.generate-cars') as HTMLButtonElement;

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

      const randomName = One_Hundred_Cars[i];
      const body = JSON.stringify({ name: randomName, color: randomColor });

      await fetch('http://127.0.0.1:3000/garage', { method: 'POST', headers, body })
        .then((resp) => resp.json())
        .then((car: Car) => {
          displayCar(car);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    window.location.reload();
  });
}
