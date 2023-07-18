// import { Project } from "../models/project.js";
// import User  from "../models/user.js";
// import { Candidature } from "../models/candidature.js";
//     // Import the functions you need from the SDKs you need
//     import { initializeApp } from "firebase/app";
//     import { getStorage, ref } from "firebase/storage";
// import mongoose from "mongoose";
// // Your web app's Firebase configuration

// export const readCandidature = async (req, res) => {
//   try {
//     const candidatures = await Candidature.find({}).populate('freelance');
//     res.send(candidatures);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const readOneCandidature = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const candidature = await Candidature.findById(id);
//     if (!candidature) {
//       return res.status(404).json({ message: 'Candidature non trouvée' });
//     }
//     res.json(candidature);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const updateStateCandidature = async (req, res) => {
//   const { id } = req.params;
//   // const { state } = req.body;
//   console.log(req.body)
//   try {
//     if (state !== "enCours" && state !== "refus" && state !== "accepted") {
//       return res.status(400).json({ message: 'Valeur d\'état incorrecte' });
//     }
    
//     const candidature = await Candidature.findById(id);
//     if (!candidature) {
//       return res.status(404).json({ message: 'Candidature non trouvée' });
//     }

//     // Vérification si l'utilisateur connecté est autorisé à mettre à jour la candidature
//     if (req.user.userType !== 'admin') {
//       return res.status(401).json({ message: 'Non autorisé' });
//     }

//     candidature.state = state;
//     const updatedCandidature = await candidature.save();
//     res.status(200).json(updatedCandidature);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const createCandidature = async (req, res) => {
//   // const  userId  = req.user; // Utilisateur connecté
//   const { projectId,freelance,downloadURL } = req.body; // ID du projet
//   console.log(req.body)
//   try {
//     const user = await User.findById(freelance);
//     if (!user) {
//       return res.status(404).json({ message: 'Utilisateur non trouvé' });
//     }

//     const project = await Project.findById(projectId);

//     if (!project) {
//       return res.status(404).json({ message: 'Projet non trouvé' });
//     }


//     const newCandidature =  await Candidature.create({
//        freelance,
//       project: projectId,
//       cv:downloadURL
//     });
//     // const createdCandidature = await newCandidature.save();

//     res.status(201).json(newCandidature);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const deleteCandidature = async (req, res) => {
//   const { id } = req.params;
//   try {
//     // Vérification si l'utilisateur connecté est autorisé à supprimer la candidature
//     if (req.user.userType !== 'admin') {
//       return res.status(401).json({ message: 'Non autorisé' });
//     }

//     const deletedCandidature = await Candidature.findByIdAndDelete(id);
//     if (!deletedCandidature) {
//       return res.status(404).json({ message: 'Candidature non trouvée' });
//     }
    
//     res.json({ message: 'Candidature supprimée avec succès' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };



// export const updateCandidatureState = async (req, res) => {
//   const { id } = req.params;
//   const { state } = req.body;

//   try {
//     const candidature = await Candidature.findById(id);
//     if (!candidature) {
//       return res.status(404).json({ message: 'Candidature non trouvée' });
//     }

//     // Vérification si l'utilisateur connecté est autorisé à mettre à jour la candidature
//     // Vous pouvez personnaliser cette vérification en fonction de votre logique d'autorisation
//     if (!req.user.isAdmin) {
//       return res.status(401).json({ message: 'Non autorisé' });
//     }

//     candidature.state = state;
//     const updatedCandidature = await candidature.save();

//     res.json(updatedCandidature);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
import { Project } from "../models/project.js";
import User from "../models/user.js";
import { Candidature } from "../models/candidature.js";
import mongoose from "mongoose";

export const readCandidature = async (req, res) => {
  try {
    const candidatures = await Candidature.find({}).populate('freelance Project')
    res.send(candidatures);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: err.message });
  }
};

export const readOneCandidature = async (req, res) => {
  const { id } = req.params;
  try {
    const candidature = await Candidature.findById(id);
    if (!candidature) {
      return res.status(404).json({ message: 'Candidature non trouvée' });
    }
    res.json(candidature);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateStateCandidature = async (req, res) => {
  console.log("here");

  const { id } = req.params;
  const { state } = req.body;
  try {
    if (state !== "enCours" && state !== "refus" && state !== "accepted") {
      return res.status(400).json({ message: 'Valeur d\'état incorrecte' });
    }
    const candidature = await Candidature.findById(id);
    if (!candidature) {
      return res.status(404).json({ message: 'Candidature non trouvée' });
    }
    candidature.state = state;
    const updatedCandidature = await candidature.save();
    res.status(200).json(updatedCandidature);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createCandidature = async (req, res) => {
  const { projectId, freelance, downloadURL } = req.body;
  try {
    const user = await User.findById(freelance);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Projet non trouvé' });
    }
    const newCandidature = await Candidature.create({
      freelance,
      Project: projectId,
      owner: project.owner,
      cv: downloadURL
    });
    res.status(201).json(newCandidature);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteCandidature = async (req, res) => {
  const { id } = req.params;
  try {
    if (req.user.userType !== 'admin') {
      return res.status(401).json({ message: 'Non autorisé' });
    }
    const deletedCandidature = await Candidature.findByIdAndDelete(id);
    if (!deletedCandidature) {
      return res.status(404).json({ message: 'Candidature non trouvée' });
    }
    res.json({ message: 'Candidature supprimée avec succès' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateCandidatureState = async (req, res) => {
  const { id } = req.params;
  const { state } = req.body;
  try {
    const candidature = await Candidature.findById(id);
    if (!candidature) {
      return res.status(404).json({ message: 'Candidature non trouvée' });
    }
    if (!req.user.isAdmin) {
      return res.status(401).json({ message: 'Non autorisé' });
    }
    candidature.state = state;
    const updatedCandidature = await candidature.save();
    res.json(updatedCandidature);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


