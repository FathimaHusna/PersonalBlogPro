//Import required modules
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

//import posts routes
const postRoutes = require('./routes/posts')
const categoryRoutes = require('./routes/categories')

const app = express()
const PORT = process.env.PORT || 8000

// Middleware
app.use(bodyParser.json())
app.use(cors())

//DB Connect
mongoose.connect("mongodb://localhost:27017/blog")
.then(()=> console.log("DB Connected."))
.catch(err => console.log('DB error', err))

//use routes
app.use('/api/posts', postRoutes)
app.use('/api/categories', categoryRoutes)

app.listen(PORT, ()=>console.log(`Server listen on port ${PORT}`))

