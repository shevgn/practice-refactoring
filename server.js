import express, { json } from "express";
const app = express();
import carRoutes from "./backend/carsRoutes";

app.use(json());
app.use("/api/cars", carRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
