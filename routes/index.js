const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.post('/clothes', controllers.createClothes)
router.get('/clothes', controllers.getAllClothes)
router.get('/clothes/:name', controllers.getClothesByName)
router.put('/clothes/:id', controllers.updateClothes)
router.delete('/clothes/:id', controllers.deleteClothes)
router.get('/clothes/details/:id', controllers.getClothesById)
router.post('/stores', controllers.createStore)
router.get('/stores', controllers.getAllStores)
router.put('/stores/:id', controllers.updateStore)

module.exports = router
