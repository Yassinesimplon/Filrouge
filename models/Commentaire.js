const mongoose = require('mongoose');

const CommentaireSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: { type: String },
});

module.exports = mongoose.model('Commentaire', CommentaireSchema);
