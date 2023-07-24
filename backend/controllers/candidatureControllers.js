
import { Project } from "../models/project.js";
import User from "../models/user.js";
import { Candidature } from "../models/candidature.js";
import mongoose from "mongoose";
import sendAcceptanceEmail  from '../sendemmail.js';

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

// export const updateStateCandidature = async (req, res) => {
//   const { id } = req.params;
//   const { state } = req.body;
//   try {
//     if (state !== "enCours" && state !== "refus" && state !== "accepted") {
//       return res.status(400).json({ message: 'Valeur d\'état incorrecte' });
//     }
//     const candidature = await Candidature.findById(id);
//     if (!candidature) {
//       return res.status(404).json({ message: 'Candidature non trouvée' });
//     }
//     candidature.state = state;
//     const updatedCandidature = await candidature.save();
//     res.status(200).json(updatedCandidature);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

export const updateStateCandidature = async (req, res) => {
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

    // Envoyer l'e-mail au freelancer concerné si la candidature est acceptée
    if (state === "accepted") {
      const  user = await User.findById(candidature.freelance);
       // Assurez-vous que l'objet candidature contient les informations nécessaires sur le freelance
      await sendAcceptanceEmail(user); // Appel de la fonction pour envoyer l'e-mail d'acceptation
    }

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


