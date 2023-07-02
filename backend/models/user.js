import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    UserType: {
      type: String,
      enum: ["admin", "owner", "freelance"],
      required: true,
    },
    nom: {
      type: String,
      required: true,
    },

    email: {
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
    phone: {
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

//static login method
UserSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error('All fields are required!');
  }

  const user = await this.findOne({ email: email });

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
UserSchema.statics.signup = async function (email, password, UserType, phone, nom) {
  // Validation
  if (!email || !password || !UserType || !nom || !phone) {
    throw Error('All fields are required!');
  }
  


  if (!validator.isEmail(email)) {
    throw Error('Invalid email');
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('You should send a strong password!');
  }

  const exists = await this.findOne({ email: email });

  if (exists) {
    throw Error('Email already exists');
  }
  if (UserType === "freelance" && !phone.startsWith("213")) {
    throw Error('you should ENTER RIGHT NUMBER');
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email: email, password: hash, UserType: UserType, phone: phone, nom: nom });
  console.log(user);
  return user;
};

const User = mongoose.model('User', UserSchema);
export default User;
