type Car = {
  name: string;
  color: string;
  id: number;
};

export function selectCarRequest(carId: number) {
  const inputTextUpdate = document.querySelector('.input-text-update') as HTMLInputElement;
  const inputColorUpdate = document.querySelector('.input-color-update') as HTMLInputElement;

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const body = JSON.stringify({ name: inputTextUpdate.value, color: inputColorUpdate.value });

  fetch(`http://127.0.0.1:3000/garage/${carId}`, { method: 'PUT', headers, body })
    .then((resp) => resp.json())
    .then((car: Car) => {
      car.name = inputTextUpdate.value;
      car.color = inputColorUpdate.value;
    })
    .catch(function (error) {
      console.log(error);
    });
}
