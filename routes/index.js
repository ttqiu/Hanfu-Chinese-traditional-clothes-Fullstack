const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is the homepage for Hanfu!'))
router.post('/clothes', controllers.createClothes)
router.get('/clothes', controllers.getAllClothes)
router.get('/clothes/:id', controllers.getClothesById)
router.put('/clothes/:id', controllers.updateClothes)
router.post('/stores', controllers.createStore)
router.get('/stores', controllers.getAllStores)
router.get('/stores/:id', controllers.getStoreById)
router.put('/stores/:id', controllers.updateStore)

module.exports = router
