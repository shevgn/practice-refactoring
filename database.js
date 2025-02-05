import { query } from "./fakeDB";

function getById(table, id) {
  return db.query(`SELECT * FROM ${table} WHERE id = $1`, [id]);
}

function addCar(make, model, year) {
  return query(
    "INSERT INTO cars (make, model, year) VALUES ($1, $2, $3)",
    [make, model, year]
  );
}

function deleteCar(id) {
  return query("DELETE FROM cars WHERE id = $1", [id]);
}

export default { getById, addCar, deleteCar };
