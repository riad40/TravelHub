const express = require('express')
const router = express.Router()
const { login, register, forgetPassword, resetPassword, verifyEmail, logout, getRoles } = require('../controllers/authController')

router.post('/login', login)
router.post('/register', register)
router.get('/register/verify/:token', verifyEmail)
router.post('/forgetpassword', forgetPassword)
router.post('/resetpassword/:token', resetPassword)
router.get('/logout', logout)
router.get('/roles', getRoles)

module.exports = router