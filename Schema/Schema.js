const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
    description: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
      },
});

module.exports = schema;