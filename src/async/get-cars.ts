import { displayCar } from '../components/display-car';
import { displayPageNumbers } from '../async/display-page-numbers';

type Car = {
  name: string;
  color: string;
  id: number;
};

export async function getCars(page = 1) {
  const garageTitle = document.querySelector('.garage-title') as HTMLElement;

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
