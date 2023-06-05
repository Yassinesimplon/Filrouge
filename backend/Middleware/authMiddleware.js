
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

async function VerifyToken(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Authorization token required' });
  }

  const token = authorization.split(' ')[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);
    req.user = await User.findOne({ _id }).select('_id');
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Invalid token' });
  }
}

async function isAdmin(req, res, next) {
  if (!req.user) {
    return res.status(400).send({
      message: 'You must sign in before',
    });
  }
  const user = await User.findById(req.user._id);
  if (user.role !== "admin") {
    return res.status(403).send({
      message: 'Not authorized, you should be an admin!',
    });
  }
  next();
}

async function isFreelancer(req, res, next) {
  if (!req.user) {
    return res.status(400).send({
      message: 'You must sign in before',
    });
  }
  const user = await User.findById(req.user._id);
  if (user.role !== "Freelancer") {
    return res.status(403).send({
      message: 'Not authorized, you should be a Freelancer!',
    });
  }
  next();
}

async function isOwner(req, res, next) {
  if (!req.user) {
    return res.status(400).send({
      message: 'You must sign in before',
    });
  }
  const user = await User.findById(req.user._id);
  if (user.role !== "owner") {
    return res.status(403).send({
      message: 'Not authorized, you should be an owner!',
    });
  }
  next();
}

module.exports = {
  VerifyToken,
  isAdmin,
  isFreelancer ,
  isOwner,
};




















// import jwt from 'jsonwebtoken';
// import User from '../models/UserModel.js';

// export const protect = async (req, res, next) => {
//   const { authorization } = req.headers;

//   if (!authorization) {
//     return res.status(401).json({ message: 'Authorization token required' });
//   }

//   const token = authorization.split(' ')[1];

//   try {
//     const decodedToken = jwt.verify(token, "SECRET");
//     const { _id } = decodedToken;
//     req.user = await User.findOne({ _id }).select('_id');
//     if (req.user) {
//       next();
//     } else {
//       res.status(401).json({ message: 'Unauthorized' });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ error: 'Invalid token' });
//   }
// };
