const { timeStamp } = require('console');
const mongoose = require('mongoose');
const { type } = require('os');

const url_schema = new mongoose.Schema({
    short_id: {
        type: String,
        unique: true,
        required: true,
    },

    redirect_Url: {
        type: String,
        required: true,
    },

    visitHistory: [{ timeStamp: { type: Number } }],
},
    { timestamps: true }
);

//model 
const new_Schema_url = mongoose.model("url", url_schema);

module.exports = {
    new_Schema_url,
}