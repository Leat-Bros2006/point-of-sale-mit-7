const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'category name is require !!!']
    },
    note: { 
        type: String,
        require: false
    },

}, {timestamps: true})

const Cagegory = mongoose.model('Category', categorySchema)
module.exports = Cagegory;