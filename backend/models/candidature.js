import mongoose from "mongoose";

const Schema = mongoose.Schema;

const candidatureSchema = new Schema(
  {
    freelance: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    Project: {
      type: Schema.Types.ObjectId,
      ref: "Project",
    },
    cv: {
      type: String,
      required:true,

    },
    state:{
      type:String,
      enum:["enCours","refus","acccepted"],
      required:true,
      default:"enCours"
    }
  },
  { timestamps: true }
);

export const Candidature = mongoose.model("candidature", candidatureSchema);
