const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is the homepage for Hanfu!'))
router.post('/clothes', controllers.createClothes)
router.get('/clothes', controllers.getAllClothes)
router.post('/stores', controllers.createStore)

module.exports = router
