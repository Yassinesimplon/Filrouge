import { User } from "../models/User.js";


// Méthode pour récupérer tous les utilisateurs
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({role:req.query});
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Méthode pour créer un nouvel utilisateur
exports.createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Méthode pour récupérer un utilisateur par son ID
exports.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Méthode pour mettre à jour un utilisateur
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { firstName, lastName, email, password },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Méthode pour supprimer un utilisateur
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    res.json({ message: 'Utilisateur supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
