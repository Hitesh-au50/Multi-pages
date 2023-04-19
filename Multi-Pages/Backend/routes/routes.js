import express from 'express'
import {General } from '../Controllers/controller.js'

const router = express.Router()

router.post('/general', General)

export default router 