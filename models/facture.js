const mongoose = require('mongoose');

const FactureSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount
});

  module.exports = mongoose.model('Facture', FactureSchema);

