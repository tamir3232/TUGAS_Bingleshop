const { Users } = require('../db/models/index')
const bcrypt = require('bcrypt')
const { password, username } = require('../config/config')


const register = async(req, res, next) => {
    try {
        const bodies = req.body
        const isUserExist = await Users.findOne({
            where: {
                email: bodies.email

            },
            attributes: ['id']
        })

        if (isUserExist) {
            throw {
                code: 400,
                message: 'email udah ada bang'
            }
        }


        const hassedpassword = bcrypt.hashSync(bodies.password, 12)

        const user = await Users.create({
            name: bodies.name,
            username: bodies.username,
            email: bodies.email,
            password: hassedpassword
        })

        return res.status(200).json({
            code: 200,
            message: 'anda berhasil mendaftarkan akun',
            data: {
                name: user.name,
                email: user.email
            }
        })

    } catch (error) {
        next(error)
    }
}

const login = async(req, res, next) => {
    try {
        const bodies = req.body

        const isUserExist = await Users.findOne({
            where: {
                email: bodies.email,

            },
            attributes: ['password'],

        })
        if (!isUserExist) {
            throw {
                code: 400,
                message: "Akun Tidak Ada"
            }
        }
        const passcompare = await bcrypt.compare(bodies.password, isUserExist.password)

        if (!passcompare) {
            throw {
                code: 400,
                message: "Salah dek"
            }
        }

        return res.status(200).json({
            code: 200,
            message: "anda berhasil login"

        })
    } catch (error) {
        next(error)
    }
}

module.exports = { register, login }