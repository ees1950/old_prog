import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import authRoute from './routes/auth.js'
import postRoute from './routes/posts.js'
import commentRoute from './routes/comments.js'

const app = express()
dotenv.config()

// Constants
const PORT = process.env.PORT || 3002
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

// Middleware
app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use(express.static('uploads'))

// Routes
// http://localhost:3002
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)
app.use('/api/comments', commentRoute)

async function start() {
    try {
        mongoose
    .connect('mongodb+srv://admin:pppppppp@cluster0.awlmmyn.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => console.log('Db ok'))
    .catch((err) => console.log('Db error', err));

        app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}
start()
