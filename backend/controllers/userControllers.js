import User from '../models/user.js';
import jwt from 'jsonwebtoken';


// ...

export const login = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Recherche de l'utilisateur dans la base de données
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Vérification du mot de passe
    if (user.password !== password) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    // Génération du token JWT
    const token = jwt.sign({ userId: user._id }, 'secret',{expiresIn:"1d"});

    // Retourne le token JWT en tant que réponse
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ...

// Méthode pour récupérer tous les utilisateurs
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: req.query.role });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Méthode pour créer un nouvel utilisateur
export const createUser = async (req, res) => {
  const { nom, email,UserType, password, téléphone } = req.body;
  try {
    const newUser = new User({
      nom,
      UserType,
      email,
      password,
      téléphone,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Méthode pour récupérer un utilisateur par son ID
export const getUserById = async (req, res) => {
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
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nom, prenom, mail, password, téléphone } = req.body;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { nom, prenom, mail, password, téléphone },
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
export const deleteUser = async (req, res) => {
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
