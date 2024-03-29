import express from 'express';
// import { protect } from '../Middleware/authMiddleware.js';
import * as projectControllers from '../controllers/projectControllers.js';

const router = express.Router();

router.post('/', projectControllers.createProject);

router.get('/', projectControllers.getAllProjects);
router.get('/:id', projectControllers.getProjectById);
router.get('/owner/:id', projectControllers.getProjectByOwner);


router.put('/:id', projectControllers.updateProject);
router.delete('/:id', projectControllers.deleteProject);

export default router;


























// import express from "express";

// import { getProjectById } from "../controllers/ProjectControllers.js";

// import { createProject } from "../controllers/ProjectControllers.js";
// import { getAllProjects } from "../controllers/ProjectControllers.js";
// import { updateProject } from "../controllers/ProjectControllers.js";
// import { deleteProject } from "../controllers/ProjectControllers.js";
// import {
//   userAuthValidation,
//   freelancerAuthValidation,
// } from "../middelwares/jwt.js";
// import { getAllProjects } from "../controllers/ProjectControllers.js";

// export const Projectroutes = express.Router();

// Projectroutes.post("/", userAuthValidation, createOffre);
// Projectroutes.get(
//   "/:id",
//   [userAuthValidation, freelancerfAuthValidation],
//   getAllProjects
// );
// Projectroutes.put("/:id", AuthValidation, updateProject);
// Projectroutes.delete("/:id", deleteProject);

// Projectroutes.get(
//   "/find/:id",
//   [userAuthValidation, freelancerAuthValidation],
//   getProjectById
// );

// Projectroutes.get(
//   "/",
//   [userAuthValidation, freelancerAuthValidation],
//   getAllProjects
// );





// // import express from "express";
// // import { creerCategorie } from "../controllers/categorieControllers.js";
// // import { affichCategorie } from "../controllers/categorieControllers.js";
// // import { updateCategorie } from "../controllers/categorieControllers.js";
// // import { supriCategorie } from "../controllers/categorieControllers.js";
// // import {
// //   adminAuthValidation,
// //   recruteurAuthValidation,
// // } from "../middelwares/jwt.js";

// // export const categorieRoutes = express.Router();

// // categorieRoutes.post("/creerCategorie", adminAuthValidation, creerCategorie);
// // categorieRoutes.get(
// //   "/affichCategorie",
// //   [adminAuthValidation, recruteurAuthValidation],
// //   affichCategorie
// // );
// // categorieRoutes.put(
// //   "/updateCategorie/:id",
// //   adminAuthValidation,
// //   updateCategorie
// // );
// // categorieRoutes.delete(
// //   "/supriCategorie/:id",
// //   adminAuthValidation,
// //   supriCategorie
// // );
