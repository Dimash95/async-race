export async function showQuantityCars() {
  const garageTitle = document.querySelector('.garage-title') as HTMLElement;

  const response = await fetch(`http://127.0.0.1:3000/garage?_page=${1}&_limit=7`, { method: 'GET' });
  const totalCount = response.headers.get('X-Total-Count');

  garageTitle.textContent = `Garage ${totalCount}`;

  return +(totalCount ?? 0);
}
