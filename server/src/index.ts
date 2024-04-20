import express from "express";
const session = require("express-session");
import userRoutes from "./routes/userRoutes";
import dotenv from "dotenv";
const cors = require("cors");
import config from "./config/config";

const store = new session.MemoryStore();

dotenv.config();

const app = express();
app.use(
  session({
    name: "sessionId",
    secret: process.env.SESSION_SECRET,
    store: store,
    saveUninitialized: false,
    resave: false,
    cookie: {
      sameSite: false,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    },
  })
);

app.use(
  cors({
    origin: config.clientUrl,
    credentials: true,
  })
);

app.use(express.json());
const port = process.env.PORT;

app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
