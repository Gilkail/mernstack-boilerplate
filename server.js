const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const passport = require("passport")
const path = require('path')

const users = require("./server/routes/api/users")
const tests = require("./server/routes/api/tests")

const app = express()

//Body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DB Config
const db = require("./server/config/keys").mongoURI

// Connect to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true, useFindAndModify: false })
	.then(() => console.log("MongoDB Connected"))
	.catch(e => console.log(e))

// Passport middleware
app.use(passport.initialize())

// Passport config
require("./server/config/passport")(passport)

// User Routes
app.use("/api/users", users)
// Test routes
app.use("/api/tests", tests)

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
	const publicPath = path.join(__dirname, 'client', 'public')
	// Set static folder
	app.use(express.static(publicPath))
	app.get('*', (req, res) => {
		res.sendFile(path.join(publicPath, 'index.html'))
	})
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))