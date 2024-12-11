//Import required modules
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//import posts routes
const postRoutes = require('./routes/posts')

const app = express()
const PORT = process.env.PORT || 8000

// Middleware
app.use(bodyParser.json())

//DB Connect
mongoose.connect("mongodb://localhost:27017/blog")
.then(()=> console.log("DB Connected."))
.catch(err => console.log('DB error', err))

//use routes
app.use('/api/posts', postRoutes)

app.listen(PORT, ()=>console.log(`Server listen on port ${PORT}`))

