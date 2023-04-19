import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import allroutes from "./routes/routes.js"


dotenv.config()
const app = express()
const port = process.env.PORT || 8000
const corsOption = {
    origin: true,
    credentials: true
}


mongoose.set('strictQuery', false)
const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://addmin:addmin123@cluster0.qbhbyuc.mongodb.net/test", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("mongoDB connected")
    } catch (err) {
        console.log('mongoDB is dissconnected')
    }
}

//middleware
app.use(express.json())
app.use(cors(corsOption))
app.use(cookieParser())
app.use('/', allroutes)

app.listen(port, () => {
    connect()
    console.log('server is connected on port ', port)
})