const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
        trim: true,
        index: {
            unique: true
        }
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        index: {
            unique: true
        },
        maxlength: process.env.SLUG_LENGTH || 7
    }
})
module.exports = Url = mongoose.model('Url', schema)