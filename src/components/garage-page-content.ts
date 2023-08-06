export function displayGaragePage() {
  const garageButton = document.querySelector('.garage-button');
  const garagePageContent = document.querySelector('.garage-page-content');
  const winnersPageContent = document.querySelector('.winners-page-content');

  garageButton?.addEventListener('click', () => {
    winnersPageContent?.classList.add('disabled');
    garagePageContent?.classList.remove('disabled');
  });
}
