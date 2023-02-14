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

const getClothesByName = async (req, res) => {
  try {
    const clothesName = req.params.name
    const clothes = await Clothes.find({
      name: { $regex: `${clothesName}`, $options: 'i' }
    })
    if (clothes) {
      return res.status(200).json({ clothes })
    }
    return res
      .status(404)
      .send('Clothes with the specified Name does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getStoreByName = async (req, res) => {
  try {
    const storeName = req.params.name
    const store = await Store.find({
      name: { $regex: `${storeName}`, $options: 'i' }
    })
    if (store) {
      return res.status(200).json({ store })
    }
    return res.status(404).send('Store with the specified Name does not exists')
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

const updateStore = async (req, res) => {
  try {
    const store = await Store.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(store)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteClothes = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Clothes.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Clothes deleted')
    }
    throw new Error('Clothes not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteStore = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Store.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Store deleted')
    }
    throw new Error('Store not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createClothes,
  createStore,
  getAllClothes,
  getAllStores,
  getClothesByName,
  getStoreByName,
  updateClothes,
  updateStore,
  deleteClothes,
  deleteStore
}
