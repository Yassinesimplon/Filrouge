import express from "express";
import { protect } from '../Middleware/authMiddleware.js';

import {
  createUser,
  getAllUsers,
  deleteAllUsers,
  login,
  logOut,
  register,
  login,
} from "../controllers/userControllers.js";

export const userRoutes = express.Router();

import { deleteUser } from "../controllers/userControllers.js";
import { updateUser } from "../controllers/userControllers.js";

userRoutes.delete("/user/:id", deleteUser);
userRoutes.put("/user/:id", updateUser);

userRoutes.get("/", adminAuthValidation, getAllUsers);
userRoutes.post("/create", createUser);
userRoutes.delete("/deleteAllUsers", adminAuthValidation, deleteAllUsers);
userRoutes.get("/logout", logOut);
router.post('/register', register);
router.post('/login', login);

export default router;
