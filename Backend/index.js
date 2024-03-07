const express = require('express')
const cors = require('cors')
const { connection } = require('./db')
const { userRouter } = require('./routes/user.routes')
const { noteRouter } = require('./routes/notes.routes')
require('dotenv').config()
const app = express()
const port = process.env.port || 6010

app.use(cors())
app.use(express.json())
app.use('/user', userRouter)
app.use('/note', noteRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, async() => {

    try {
        await connection
        console.log('database is connected')
    } catch (error) {
        console.log("error--->", error)
    }
  console.log(`Example app listening on port  ${port}`)
})