import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import * as candidatureControllers from '../controllers/candidatureControllers.js';

const router = express.Router();

router.get('/', protect, candidatureControllers.readCandidature);
router.get('/:id', protect, candidatureControllers.readOneCandidature);
router.put('/:id', protect, candidatureControllers.updateStateCandidature);
router.post('/', protect, candidatureControllers.createCandidature);
router.delete('/:id', protect, candidatureControllers.deleteCandidature);

export default router;




















// import express from "express";

// import {
//   readCandidature,
//   readOneCandidature,
//   updateStateCandidature,
// } from "../controllers/candidatureControllers.js";

// import {
//   newCandidature,
//   getCandidature,
//   deleteCandidature,
// } from "../controllers/candidatureControllers.js";
// import {
//   recruteurAuthValidation,
//   candidatAuthValidation,
// } from "../middelwares/jwt.js";

// export const candidatureRoutes = express.Router();

// candidatureRoutes.get(
//   "/",
//   [userAuthValidation, userAuthValidation],
//   readCandidature
// );
// candidatureRoutes.get(
//   "/:id",
//   [userAuthValidation, userAuthValidation],
//   readOneCandidature
// );
// candidatureRoutes.patch(
//   "/:id",
//   [userAuthValidation, userAuthValidation],
//   updateStateCandidature
// );

// candidatureRoutes.post("/", userAuthValidation, newCandidature);

// // candidatureRoutes.get("/", getCandidature) // same as readCandidature

// candidatureRoutes.delete(
//   "/delete/:id",
//   userAuthValidation,
//   deleteCandidature
// );


