import express from "express";
import authRoutes from "./auth/auth.routes";

const app = express();

app.use(express.json());

// подключаем модули
app.use("/auth", authRoutes);

export default app;