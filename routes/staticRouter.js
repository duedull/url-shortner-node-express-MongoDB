const express = require('express')
const Staticrouter = express.Router()
const { new_Schema_url } = require('../models/url')

Staticrouter.get('/', async (req, res) => {
    const all = await new_Schema_url.find({});
    return res.render('index', {
        url: all,
    });
})
module.exports = {
    Staticrouter,
}