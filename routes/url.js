const express = require('express')
const router = express.Router()
const { HandleGetUrl, HandleShortendUrl } = require('../controllers/url')

router
    .route('/short+this+url')
    .post(HandleGetUrl)

router
    .route('/:id')
    .get(HandleShortendUrl)

module.exports = {
    router,
}