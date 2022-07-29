const { Pesanan, bayar } = require('../controllers/order')

const router = require('express').Router()

router.post('/pesan', Pesanan)
router.post('/bayar', bayar)

module.exports = router