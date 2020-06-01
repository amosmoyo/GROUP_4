const mongoose = require('mongoose');

// User Schema
const payments = mongoose.Schema ({
  id: {
   type: String
  },
  amount: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  creatorName: {
    type: mongoose.Schema.Types.String,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('PAYMENTS', payments);