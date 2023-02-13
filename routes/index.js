const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is the homepage for Hanfu!'))
router.post('/clothes', controllers.createClothes)
router.get('/clothes', controllers.getAllClothes)
router.get('/clothes/:id', controllers.getClothesById)
router.post('/stores', controllers.createStore)
router.get('/stores', controllers.getAllStores)

module.exports = router
