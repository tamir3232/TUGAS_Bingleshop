require('dotenv').config()

const jwt = require('jsonwebtoken')

const authorization = (role) => (req, res, next) => {
    try {
        // get token from header
        const { authorization } = req.headers
        const token = authorization.split(" ")[1] // ['Bearer', '<token>']


        const decoded = jwt.verify(token, process.env.JWT_SECRET)




        // inject context
        req.user_id = decoded.user_id
        next()
    } catch (error) {
        next({ code: error.code || 401, message: error.message || 'invalid token' })
    }
}

module.exports = {
    authorization
}