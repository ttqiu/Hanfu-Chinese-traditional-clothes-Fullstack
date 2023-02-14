const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is the homepage for Hanfu!'))
router.post('/clothes', controllers.createClothes)
router.get('/clothes', controllers.getAllClothes)
router.get('/clothes/:name', controllers.getClothesByName)
router.put('/clothes/:id', controllers.updateClothes)
router.delete('/clothes/:id', controllers.deleteClothes)
router.post('/stores', controllers.createStore)
router.get('/stores', controllers.getAllStores)
router.get('/stores/:name', controllers.getStoreByName)
router.put('/stores/:id', controllers.updateStore)
router.delete('/stores/:id', controllers.deleteStore)

module.exports = router
