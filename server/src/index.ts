import express from "express";
import userRoutes from "./routes/userRoutes";
import dotenv from "dotenv";
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;

app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
