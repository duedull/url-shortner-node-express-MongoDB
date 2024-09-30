const express = require('express')
const router = express.Router()
const { HandleGetUrl, HandleShortendUrl } = require('../controllers/url')

router.use(express.json());

router
    .route('/')
    .post(HandleGetUrl)

router
    .route('/:id')
    .get(HandleShortendUrl)

module.exports = {
    router,
}