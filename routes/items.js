const { Add, Get } = require('../controllers/items.js')
const verifyToken = require('../controllers/verifyToken')
const router = require('express').Router()

router.post('/add', verifyToken, Add)
router.get('/get', Get)


module.exports = router