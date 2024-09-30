const mongoose = require('mongoose');
const shortid = require('shortid')
const { new_Schema_url } = require('../models/url');
const { timeStamp } = require('console');

const connect_db = async () => {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/url-shortner');
        console.log('db connected');
    } catch (error) {
        console.log(error);
    }
}

const HandleGetUrl = async (req, res) => {
    const body = req.body;
    if (!body.url) { res.status(400).json({ "status": "provide a url" }) }
    console.log(body.url);
    const short_ID = shortid();

    await new_Schema_url.create({
        short_id: short_ID,
        redirect_Url: body.url,
        version_history: [],
    })
    res.status(200).json({ "status": "done submitting!!!", "url_id": short_ID })
}

const HandleShortendUrl = async (req, res) => {
    const ID = req.params.id;
    const url_match = await new_Schema_url.findOneAndUpdate({ short_id: ID }, { $push: { visitHistory: { timeStamp: Date.now(), } } });
    const redirect = url_match.redirect_Url;
    console.log(redirect);
    res.redirect(redirect);
}

module.exports = {
    connect_db,
    HandleGetUrl,
    HandleShortendUrl,
}