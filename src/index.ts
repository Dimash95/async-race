import './global.css';
import { displayMainContent } from './components/display-main-content';
import { displayWinnerPage } from './components/display-winner-page';
import { displayGaragePage } from './components/garage-page-content';
import { getCars } from './async/get-cars';
import { createCar } from './async/create-car';
import { generateHundredCars } from './async/generate-hundred-cars';

displayMainContent();
displayWinnerPage();
displayGaragePage();
getCars();
createCar();
generateHundredCars();
