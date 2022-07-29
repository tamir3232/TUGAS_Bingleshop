const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) {
        throw {
            code: 400,
            message: "Silahkan Login"
        }
    }
    try {
        const verified = jwt.verify(token, process.env.SECRETKEY)
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = verifyToken;