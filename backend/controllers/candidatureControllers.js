import { Project } from "../models/project.js";
import { User } from "../models/user.js"
import { Candidature } from "../models/candidature.js";


export const readCandidature = async (req, res) => {
  try {
    const candidatures = await Candidature.find({});
    res.send(candidatures);
  } catch (err) {
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

    // Vérification si l'utilisateur connecté est autorisé à mettre à jour la candidature
    if (req.user.userType !== 'admin') {
      return res.status(401).json({ message: 'Non autorisé' });
    }

    candidature.state = state;
    const updatedCandidature = await candidature.save();
    res.json(updatedCandidature);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createCandidature = async (req, res) => {
  const { userId } = req.user; // Utilisateur connecté
  const { projectId } = req.body; // ID du projet

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Projet non trouvé' });
    }

    // Vérification si l'utilisateur connecté est un freelance
    if (user.userType !== 'freelance') {
      return res.status(401).json({ message: 'Non autorisé' });
    }

    const newCandidature = new Candidature({
      candidat: userId,
      project: projectId,
    });
    const createdCandidature = await newCandidature.save();

    res.status(201).json(createdCandidature);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteCandidature = async (req, res) => {
  const { id } = req.params;
  try {
    // Vérification si l'utilisateur connecté est autorisé à supprimer la candidature
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
