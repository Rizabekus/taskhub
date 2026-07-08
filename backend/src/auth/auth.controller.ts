import { Request, Response } from "express";
import * as authService from "./auth.service";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await authService.register(email, password);

    res.json(user);
  } catch (err) {
    res.status(400).json({ message: "Error registering user" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const result = await authService.login(email, password);

    res.json(result);
  } catch (err) {
    res.status(401).json({ message: "Invalid credentials" });
  }
};