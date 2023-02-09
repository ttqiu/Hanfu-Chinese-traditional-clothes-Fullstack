const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Clothes = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    style: { type: String, required: true },
    category: { type: String, required: true },
    size: { type: Array, required: true },
    store: { type: Schema.Types.ObjectId, ref: 'Store' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Clothes', Clothes)
