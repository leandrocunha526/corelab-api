require("dotenv").config({
    path: process.env.NODE_ENV === 'test' ? ".env.test" : ".env",
})

import express from "express"
import cors from "cors"

import connectDB from "./config/mongoose"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())

connectDB()

const PORT = process.env.PORT || 3333
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    const err = Error()
    res.status(404).json({
      message: "Error 404: Not found"
    });
    next(err)
});
