const express = require('express')
const cors = require('cors')
require('./database')
require('./morgan')

const PORT = process.env.PORT || 4000
const app = express()
app.use(express.json())
app.use(require('./morgan'))
app.use(cors())
app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`))

app.use('/', require('./routes/UrlRouter'))
