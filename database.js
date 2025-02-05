import { query } from "./fakeDB";

// Отримати машину за ID
function getCarById(id) {
  return query("SELECT * FROM cars WHERE id = $1", [id]);
}

// Отримати всі машини
function getAllCars() {
  return query("SELECT * FROM cars");
}

// Додати машину
function addCar(make, model, year) {
  return query(
    "INSERT INTO cars (make, model, year) VALUES ($1, $2, $3)",
    [make, model, year]
  );
}

// Видалити машину
function deleteCar(id) {
  return query("DELETE FROM cars WHERE id = $1", [id]);
}

// Отримати користувача за ID
function getUserById(id) {
  return query("SELECT * FROM users WHERE id = $1", [id]);
}

export default { getCarById, getAllCars, addCar, deleteCar, getUserById };
