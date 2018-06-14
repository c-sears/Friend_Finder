const express = require('express')
const bodyParser = require('body-parser')

const { api_routing } = require('./app/routing/apiRoutes')
const { html_routing } = require('./app/routing/htmlRoutes')

const app = express()

const PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

api_routing(app)
html_routing(app)



app.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`))