const mongoose = require("mongoose")

const pbSchema = new mongoose.Schema({
    title: {
        type: String, 
        trim: true,
        required: true,

    },
    budget: {
        type: Number,
        required: true,
        unique: true

    },
    backgroundColor: {
        type: String,
        trim: true,
        required: true
    }

}, { collection: 'personalBudget' })

module.exports = mongoose.model('personalBudget', pbSchema)