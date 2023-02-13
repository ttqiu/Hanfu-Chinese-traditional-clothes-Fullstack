const Clothes = require('../models/clothes')
const Store = require('../models/store')

const createClothes = async (req, res) => {
  try {
    const clothes = await new Clothes(req.body)
    await clothes.save()
    return res.status(201).json({
      clothes
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createStore = async (req, res) => {
  try {
    const store = await new Store(req.body)
    await store.save()
    return res.status(201).json({
      store
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createClothes,
  createStore
}
