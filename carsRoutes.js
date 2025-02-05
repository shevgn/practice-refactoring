import { Router } from "express";
const router = Router();
import { getById, addCar, deleteCar } from "./database";

router.get("/", async (req, res) => {
  try {
    const cars = await getById("cars", "*");
    res.json(cars);
  }
  catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const car = await getById("cars", req.params.id);
    res.json(car);
  }
  catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { make, model, year } = req.body;
    await addCar(make, model, year);
    res.json({ message: "Car added" });
  }
  catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await deleteCar(req.params.id);
    res.json({ message: "Car deleted" });
  }
  catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
