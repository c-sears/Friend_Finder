// File that will hold all user data

/**
 * @param  {array} user_obj an array containing numbers to check against
 * @param {array} users_arr array of objects holding a `results` array to use as validation against `test_arr`
 * @returns {object} object from validators_arr with closest matching results array
 */
exports.find_match = (user_obj, users_arr)=>{
    const reducer = (accumulator, current_value) => accumulator + current_value
    const user_score = user_obj.results.reduce(reducer)
    let current_best = 0
    let best_match
    for(const user of users_arr){
        const uid = user.uid
        const user_score = user.results.reduce(reducer)
        if(user_score > current_best) best_match = user
    }
    return best_match
}

exports.users = [
    {
        "name": "Caleb",
        "img_url": "https://randomuser.me/api/portraits/women/74.jpg",
        "uid": 1,
        "results": [
            5,
            4,
            5,
            3,
            4,
            5,
            3,
            4,
            3,
            5
        ]
    }
]