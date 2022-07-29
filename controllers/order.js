const { verify } = require('jsonwebtoken')
const { Order, Items } = require('../db/models/index')
const decode = require('jwt-decode')
const jwt = require('jsonwebtoken')
const verifyToken = require('./verifyToken')
const { default: jwtDecode } = require('jwt-decode')


const Pesanan = async(req, res, next) => {
    try {
        const bodies = req.body
        const token = req.header('auth-token')
        const decode = jwtDecode(token)

        const isItemsExist = await Items.findOne({
            where: {
                id: bodies.ItemId

            },
            attributes: ['name', 'price', 'id']
        })

        if (!isItemsExist) {
            throw {
                code: 400,
                message: "barang tidak tersedia"
            }
        }

        const orderExist = await Order.findOne({
            where: {
                users_id: decode.id,
                items_id: isItemsExist.id,
            },

        })

        if (!orderExist) {
            const order = await Order.create({
                invoice: Math.floor(Math.random() * 1000000000),
                name: isItemsExist.name,
                users_id: decode.id,
                items_id: isItemsExist.id,
                qty: bodies.qty,
                price: isItemsExist.price * bodies.qty
            })
            return res.status(200).json({
                code: 200,
                message: 'anda berhasil memasukan ke keranjanga',
                data: {
                    invoice: order.invoice,
                    name: order.name,
                    users_id: order.users_id,
                    items_id: order.items_id,
                    qty: order.qty,
                    price: order.price
                }
            })
        }


        Order.update({
            qty: orderExist.qty + (bodies.qty),
            price: orderExist.price + (isItemsExist.price * bodies.qty)
        }, {
            where: {
                items_id: orderExist.items_id,

            }
        })
        return res.status(200).json({
            code: 200,
            message: orderExist.id
        })
    } catch (error) {
        next(error)
    }
}
const bayar = async(req, res, next) => {
    try {
        const token = req.header('auth-token')
        const decode = jwtDecode(token)

        const orderExist = await Order.findAll({
            where: {
                users_id: decode.id,
            },
        })
        if (orderExist) {
            throw {
                code: 400,
                message: orderExist
            }
        }


    } catch (error) {
        next(error)
    }
}


module.exports = { Pesanan, bayar }