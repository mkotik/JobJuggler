import express from "express";
const session = require("express-session");
import userRoutes from "./routes/userRoutes";
import clientRoutes from "./routes/clientRoutes";
import invoiceRoutes from "./routes/invoiceRoutes";
import quoteRoutes from "./routes/quoteRoutes";
import jobRoutes from "./routes/jobRoutes";
import requestRoutes from "./routes/requestRoutes";
import dotenv from "dotenv";
const cors = require("cors");
import cookieParser from "cookie-parser";
import config from "./config/config";

export const store = new session.MemoryStore();

dotenv.config();

const app = express();
app.use(cookieParser());
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
app.use("/api/clients", clientRoutes);
app.use("/api/invoices", invoiceRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/quotes", quoteRoutes);
app.use("/api/requests", requestRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
