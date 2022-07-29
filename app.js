const express = require("express");
const userRouter = require('./routes/users.js')
const itemsRouter = require('./routes/items.js')
const orderRouter = require('./routes/orders.js')
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', userRouter)
app.use('/items', itemsRouter)
app.use('/order', orderRouter)


app.use((err, req, res, next) => {
    return res.status(err.code || 500).json({
        message: err.message || 'internal server eror'
    })
})
module.exports = app;