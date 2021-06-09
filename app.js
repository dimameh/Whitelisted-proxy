import express from 'express'
import authorizationRouter from './routes/authorizationRest'
import userRouter from './routes/userRest'

var app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  next()
})

app.use(express.json())

app.use('/api/authorization', authorizationRouter)
app.use('/api/user', userRouter)

module.exports = app
