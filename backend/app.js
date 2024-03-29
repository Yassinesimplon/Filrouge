import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import usersRoutes from './routes/userRoutes.js';
import projectsRoutes from "./routes/Projectroutes.js";
import candidaturesRoutes from './routes/candidatureRoutes.js';
import {VerifyToken,isAdmin,isFreelancer,isOwner} from './Middleware/authMiddleware.js';
import cors from "cors"
dotenv.config();
const port = process.env.PORT;
const dbURI = process.env.DBURI;

const app = express();
mongoose.set("strictQuery", true);
mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(port, () => {
      console.log(`L'application est en cours d'exécution sur le port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
// app.use (cors())
app.use(cors({ origin: '*' }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', usersRoutes);
app.use('/projects', projectsRoutes);
app.use('/candidatures', candidaturesRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

















// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cookieParser from "cookie-parser";

// import express from 'express';
// import usersRoutes from './routes/usersRoutes.js';
// import projectsRoutes from './routes/projectsRoutes.js';
// import candidaturesRoutes from './routes/candidaturesRoutes.js';

// // import { userRoutes } from "./routes/userRoutes.js";
// // import { adminRoutes } from "./routes/adminRoutes.js";
// // import { recruteurRoutes } from "./routes/recruteurRoutes.js";
// // import { candidatRoutes } from "./routes/candidatRoutes.js";
// // import { categorieRoutes } from "./routes/categorieRoutes.js";
// // import { candidatureRoutes } from "./routes/candidatureRoutes.js";
// // import { offreRoutes } from "./routes/offreRoutes.js";

// dotenv.config();
// const port = process.env.PORT;
// const dbURI = process.env.DBURI;

// const app = express();
// mongoose.set("strictQuery", true);
// mongoose
//   .connect(dbURI)
//   .then((result) => {
//     app.listen(port, () => {
//       console.log(`this app is running in port http://localhost:${port}`);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   const app = express();

// app.use('/users', usersRoutes);
// app.use('/projects', projectsRoutes);
// app.use('/candidatures', candidaturesRoutes);

// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));
// // app.use(cookieParser());

// // app.use("/users", userRoutes);
// // app.use("/admins", adminRoutes);
// // app.use("/recruteurs", recruteurRoutes);
// // app.use("/candidats", candidatRoutes);
// // app.use("/categories", categorieRoutes);
// // app.use("/candidatures", candidatureRoutes);
// // app.use("/offres", offreRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });
