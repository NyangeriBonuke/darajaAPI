const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen('8000', (err, live) => {
    if(err){
        console.error(err)
    }
    console.log("Server runnning on Port 8000")
})