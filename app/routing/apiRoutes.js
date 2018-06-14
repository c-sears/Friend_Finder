const { users } = require('../data/friends')


// BEGIN ROUTE HANDLING
//===========================================================
exports.api_routing = (app)=>{
    // Returns json of users
    app.get('/api/users', (req, res)=>{
        res.json(users)
    })

    // Adds user to users
    app.post('/api/addUser', (req, res)=>{
        const new_user = req.body
        users.push(new_user)
        console.log(`User added`) 
    })
}
// END ROUTE HANDLING
//===========================================================
