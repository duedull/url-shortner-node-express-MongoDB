const mongoose = require('mongoose');

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

    version_history: [
        {
            timeStamp: {
                type: Number
            }
        }
    ]
},
    { timestamps: true });

//model 
const new_Schema_url = mongoose.model("url", url_schema);

module.exports = {
    new_Schema_url,
}