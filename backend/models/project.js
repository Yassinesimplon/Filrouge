import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  
  title: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  status: { type: String, default: 'created' },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

// Dans '../models/project.js'
export const Project = mongoose.model('Project', ProjectSchema);
