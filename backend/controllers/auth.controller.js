
import User from '../models/user.js';
import jwt from 'jsonwebtoken';


// this creates a JWT token for a given user id
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
};

// login function
export async function login(req, res) {
  const { email, password } = req.body;
  try {
    // using the static method login defined in the model
    const user = await User.login(email, password);

    // create token
    const token = createToken(user._id);
    res.status(200).json({
      user: user._id,
      userType: user.UserType,
      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// register function
export async function register(req, res) {
  const { email, password, UserType,phone, nom } = req.body;
  console.log({ email, password, UserType,phone,nom });

  try {
    // register the user using the static method signup
    const user = await User.signup(email, password, UserType, phone,nom);

    // create token to login with it
    const token = createToken(user._id);

  

    res.status(200).json({
      email,
      token,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// get all users
export async function getAllUsers(req, res) {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// delete user
export async function deleteUser(req, res) {
  try {
    const id = req.params.id;

    await User.findByIdAndDelete(id);

    res.send(`user has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

















