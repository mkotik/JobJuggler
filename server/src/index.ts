import express from "express";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.use("/api", userRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
