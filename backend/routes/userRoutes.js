// import express from "express";
// import { protect } from '../Middleware/authMiddleware.js';

// import {
//   createUser,
//   getAllUsers,
//   deleteAllUsers,
//   login,
//   logOut,
//   register,
//   login,
// } from "../controllers/userControllers.js";

// export const userRoutes = express.Router();

// import { deleteUser } from "../controllers/userControllers.js";
// import { updateUser } from "../controllers/userControllers.js";

// userRoutes.delete("/user/:id", deleteUser);
// userRoutes.put("/user/:id", updateUser);

// userRoutes.get("/", adminAuthValidation, getAllUsers);
// userRoutes.post("/create", createUser);
// userRoutes.delete("/deleteAllUsers", adminAuthValidation, deleteAllUsers);
// userRoutes.get("/logout", logOut);
// router.post('/register', register);
// router.post('/login', login);

// export default router;

import express from 'express';
import * as userControllers from '../controllers/userControllers.js';
import * as authController from '../controllers/auth.controller.js';
import { VerifyToken , isAdmin } from '../Middleware/authMiddleware.js';



const router = express.Router();

router.get('/',userControllers.getAllUsers);
router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/:id', userControllers.getUserById);
router.put('/:id', userControllers.updateUser);
router.delete('/:id' , userControllers.deleteUser);

export default router;
