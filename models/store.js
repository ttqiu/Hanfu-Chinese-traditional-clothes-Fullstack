const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Store = new Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    logo: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Store', Store)
