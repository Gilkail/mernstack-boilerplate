const express = require("express")
const router = express.Router()

// Load test model
const Test = require("../../models/Test")

// @route   POST api/tests
// @desc    add new test
// @access  Public route
router.post("/", (req, res) => {
    const newTest = new Test({
        text: req.body.text
    })
    newTest.save()
        .then(test => res.json(test))
        .catch(err => console.log(err))
})

// @route   GET api/tests
// @desc    add new test
// @access  Public route
router.get("/", (req, res) => {
    Test.find()
        .then(tests => res.json(tests))
})


module.exports = router