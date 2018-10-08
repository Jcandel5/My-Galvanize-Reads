const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())
app.get('/', (req,res,next) => {

})

app.listen(port , () => {
    console.log(`listening on port ${port}`)
})
