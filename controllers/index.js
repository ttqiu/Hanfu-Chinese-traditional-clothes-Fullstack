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

const getAllClothes = async (req, res) => {
  try {
    const clothes = await Clothes.find()
    return res.status(200).json({ clothes })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllStores = async (req, res) => {
  try {
    const stores = await Store.find()
    return res.status(200).json({ stores })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getClothesById = async (req, res) => {
  try {
    const { id } = req.params
    const clothes = await Clothes.findById(id)
    if (clothes) {
      return res.status(200).json({ clothes })
    }
    return res.status(404).send('Clothes with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getStoreById = async (req, res) => {
  try {
    const { id } = req.params
    const store = await Store.findById(id)
    if (store) {
      return res.status(200).json({ store })
    }
    return res.status(404).send('Store with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateClothes = async (req, res) => {
  try {
    const clothes = await Clothes.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(clothes)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createClothes,
  createStore,
  getAllClothes,
  getAllStores,
  getClothesById,
  getStoreById,
  updateClothes
}
