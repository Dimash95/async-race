export default function garageWinners() {
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
}
