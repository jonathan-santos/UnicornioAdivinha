const express = require('express')

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.static('www'))

app.listen(PORT, (req, res) => {
    console.log(`Server started at port ${PORT} \nPress Ctrl + C to close it`)
})