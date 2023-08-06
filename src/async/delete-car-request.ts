import { getCars } from './get-cars';

export async function deleteCarRequest(carId: number): Promise<void> {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  await fetch(`http://127.0.0.1:3000/garage/${carId}`, { method: 'DELETE', headers });
  await getCars();
}
