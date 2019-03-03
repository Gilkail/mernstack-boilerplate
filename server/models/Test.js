const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create schema
const TestSchema = new Schema({
    text: {
        type: String,
        required: true
    }
})

const Test = mongoose.model("tests", TestSchema)

module.exports = Test
