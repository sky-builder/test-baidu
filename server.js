const express = require('express')
const app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))

app.listen(3000, () => {
    console.log('listen 3000')
})