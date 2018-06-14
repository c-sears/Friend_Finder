const path = require('path')

// BEGIN HTML ROUTING
//===========================================================
exports.html_routing = (app)=>{
    // Routing for homepage
    app.get('/', (req, res)=>{
        res.sendFile(path.join(__dirname,'../public/home.html'))
    })

    // Routing for personality test
    app.get('/survey', (req, res)=>{
        res.sendFile(path.join(__dirname,'../public/survey.html'))
    })
}
// END HTML ROUTING
//===========================================================