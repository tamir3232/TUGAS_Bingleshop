const Users = require('../db/models/users')
const bcrypt = require('bcrypt')
const register = async(req, res, next) => {
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
    return status(200).json({
        code: 200,
        message: 'anda berhasil memasukan password',
        data: {
            name: user.name,
            email: user.email
        }
    })
}

module.exports = { register }