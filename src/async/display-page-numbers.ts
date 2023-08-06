import { showQuantityCars } from '../async/show-quantity-cars';
import { getCars } from './get-cars';

export async function displayPageNumbers() {
  const CAR_ROWS = 7;
  const pageNumbers = document.querySelector('.page-numbers') as HTMLUListElement;
  const pageNumber = document.querySelector('.page-number') as HTMLElement;
  const allCars = document.querySelector('.all-cars') as HTMLElement;

  const totalCount = await showQuantityCars();
  const pages = Math.ceil(totalCount / CAR_ROWS);

  const liAll = document.querySelectorAll('.li');

  liAll.forEach((e) => {
    pageNumbers.removeChild(e);
  });

  for (let i = 1; i <= pages; i++) {
    const li = document.createElement('li');
    li.classList.add('li');
    li.innerHTML = i.toString();
    pageNumbers.append(li);

    li.addEventListener('click', () => {
      pageNumber.textContent = `Page #${i}`;
      allCars.innerHTML = '';
      getCars(i);
    });
  }
}
