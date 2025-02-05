import express, { json } from "express";
const app = express();
import carRoutes from "./backend/carsRoutes";

app.use(json());
app.use("/api/cars", carRoutes);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
