const { Items } = require('../db/models/index')
const fs = require('fs')

const { password, username } = require('../config/config')
const verifyToken = require('./verifyToken')


const Add = async(req, res, next) => {
    try {
        const bodies = req.body
        const item = await Items.create({
            name: bodies.name,
            price: bodies.price,
            categories: bodies.catagories,

        })
        return res.status(200).json({
            code: 200,
            message: 'berhasil menambah barang'
        })
    } catch (error) {
        next(error)
    }
}

const Get = async(req, res, next) => {
    try {
        const itemShow = await Items.findAll()
            // const itemsAsString = fs.readFileSync(itemShow).toString()
            // const items = JSON.parse(itemsAsString)
        const isItemsexist = itemShow && itemShow.length > 0
        if (!isItemsexist) {
            throw {
                code: 404,
                message: "tidak ada"
            }
        }
        return res.status(200).json({
            message: 'Ditemukan',
            data: itemShow
        })

    } catch (error) {
        next(error)
    }
}








module.exports = { Add, Get }