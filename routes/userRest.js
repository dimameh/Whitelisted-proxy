import express from 'express'
import protectedLink from '../utils/linkProtector'

const router = express.Router()

router.use((req, _, next) => {
  const token = req.header("Authorization") && req.header("Authorization").trim()
  if (token) req.token = token
  next()
})

// Get user id by email
router.get('/:email/id', protectedLink, (req, res) => {
  const email = req.params.email
  
  // TODO: Write handler

  res.json({ status: 'ok', email })
})

// Get user profile link
router.get('/:userId/profile', protectedLink, (req, res) => {
  const userId = req.params.userId

  // TODO: Write handler

  res.json({ status: 'ok' })
})

// Get masquerade link
router.get('/:userId/masquerade', protectedLink, (req, res) => {
  const userId = req.params.userId

  // TODO: Write handler

  res.json({ status: 'ok' })
})

// Get user's bags table
router.get('/:userId/bags', protectedLink, (req, res) => {
  const userId = req.params.userId

  // TODO: Write handler

  res.json({ status: 'ok' })
})

// Get bag status
router.get('/:userId/bag/:bagId/status', protectedLink, (req, res) => {
  const userId = req.params.userId
  const bagId = req.params.bagId

  // TODO: Write handler

  res.json({ status: 'ok' })
})

// Get user orders info
router.get('/:userId/orders', protectedLink, (req, res) => {
  const userId = req.params.userId

  // TODO: Write handler

  res.json({ status: 'ok' })
})

// Get user shipments info
router.get('/:userId/shipments', protectedLink, (req, res) => {
  const userId = req.params.userId

  // TODO: Write handler

  res.json({ status: 'ok' })
})

// Get user rejected items
router.get('/:userId/items/rejected', protectedLink, (req, res) => {
  const userId = req.params.userId

  // TODO: Write handler

  res.json({ status: 'ok' })
})

module.exports = router
