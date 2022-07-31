const { Pesanan, bayar, getOrder, deleteOrder } = require('../controllers/order')
const verifyToken = require('../controllers/verifyToken')

const router = require('express').Router()

router.post('/pesan', verifyToken, Pesanan)
router.post('/bayar', verifyToken, bayar)
router.get('/cart', verifyToken, getOrder)
router.delete('/hapus', verifyToken, deleteOrder)

module.exports = router