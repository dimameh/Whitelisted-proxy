import express from 'express'
import hasher from '../utils/hasher'

const router = express.Router()

// Get your token by login and password
router.post('/generateToken', (req, res, next) => {
  const { login, password } = req.body
  res.json({ status: 'ok', token: hasher.getTokenByLoginAndPassword(login, password) })
})

module.exports = router
