import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userType: {
      type: String,
      enum: ["admin", "Owner", "freelance"],
      required: true,
    },
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
    },
    password: {
      type: String,
      required: true,
    },
    téléphone: {
      type: String,
      required: true,
    },
    description: String,
    img: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

//static login method
userSchema.statics.login = async function(email, password) {
  if (!email || !password) {
    throw Error('All fields are required!');
  }

  const user = await this.findOne({ mail: email });

  if (!user) {
    throw Error('Incorrect email');
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error('Incorrect password');
  }

  return user;
};

//static signup method
userSchema.statics.signup = async function(email, password, role) {
  // Validation
  if (!email || !password || !role) {
    throw Error('All fields are required!');
  }

  if (!validator.isEmail(email)) {
    throw Error('Invalid email');
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('You should send a strong password!');
  }

  const exists = await this.findOne({ mail: email });

  if (exists) {
    throw Error('Email already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ mail: email, password: hash, userType: role });

  return user.toObject({
    getters: true,
    versionKey: false,
    transform: function(doc, ret) {
      delete ret.password;
    },
  });
};

export default User;
