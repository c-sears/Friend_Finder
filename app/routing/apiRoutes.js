const { users, find_match } = require('../data/friends')

/**
 * 
 * @param {array} arr array of string value numbers
 * @returns {array} new array of integers
 */
const string_to_int = arr => {
    return arr.reduce((int_arr, str_num)=> {
        int_arr.push(parseInt(str_num))
        return int_arr
    }, [])
}


// BEGIN ROUTE HANDLING
//===========================================================
exports.api_routing = (app)=>{
    // Returns json of users
    app.get('/api/users', (req, res)=>{
        res.json(users)
    })

    // Adds user to users
    app.post('/api/addUser', (req, res)=>{
        // Grabs user object on request body
        const new_user = req.body
        // Convert the string numbers to integers
        new_user.results = string_to_int(new_user.results)
        // Add incrementing user id
        new_user.uid = users.length + 1
        // Send the user their best 'match' as a user object
        res.send(find_match(new_user, users))
        // Push user data to local js file
        users.push(new_user)

    })
}
// END ROUTE HANDLING
//===========================================================
