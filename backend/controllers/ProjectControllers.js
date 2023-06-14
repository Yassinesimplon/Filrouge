import  {Project}  from "../models/project.js";
import User from "../models/user.js";


// Créer un nouveau projet
export const createProject = async (req, res) => {
  try {
    const { title, description, startDate, endDate, status,owner } = req.body;
    // const owner = req.user._id; // L'utilisateur connecté est le propriétaire du projet

    const project = new Project({
      title,
      description,
      startDate,
      endDate,
      status,
      owner,
    });

    const savedProject = await project.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtenir tous les projets
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Obtenir un projet par son ID
export const getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: 'Projet non trouvé' });
    }
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mettre à jour un projet
export const updateProject = async (req, res) => {
  const { id } = req.params;
  try {
    const { title, description, startDate, endDate, status } = req.body;

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { title, description, startDate, endDate, status },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: 'Projet non trouvé' });
    }

    res.json(updatedProject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }


  
};

// Supprimer un projet
export const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProject = await Project.findByIdAndRemove(id);
    if (!deletedProject) {
      return res.status(404).json({ message: 'Projet non trouvé' });
    }
    res.json({ message: 'Projet supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
