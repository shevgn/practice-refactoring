import { Router } from "express";
const router = Router();
import { getCarById, getAllCars, addCar, deleteCar } from "./database";

// Отримати всі авто
router.get("/", async (req, res) => {
  const cars = await getAllCars();
  res.json(cars);
});

// Отримати авто за ID
router.get("/:id", async (req, res) => {
  const car = await getCarById(req.params.id);
  res.json(car);
});

// Додати авто
router.post("/", async (req, res) => {
  const { make, model, year } = req.body;
  await addCar(make, model, year);
  res.json({ message: "Car added" });
});

// Видалити авто
router.delete("/:id", async (req, res) => {
  await deleteCar(req.params.id);
  res.json({ message: "Car deleted" });
});

export default router;
