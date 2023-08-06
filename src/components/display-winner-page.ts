export function displayWinnerPage() {
  const winnersButton = document.querySelector('.winners-button');
  const garagePageContent = document.querySelector('.garage-page-content');
  const winnersPageContent = document.querySelector('.winners-page-content');

  winnersButton?.addEventListener('click', () => {
    garagePageContent?.classList.add('disabled');
    winnersPageContent?.classList.remove('disabled');
  });
}
