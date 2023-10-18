const Users = require('../models/Users');

async function addUsers(req, res){
    try {
        const {name, email, password} = req.body;
        const newUser = new Users({
            name, email, password
        });

        await newUser.save();
        return res.status(201).json({
            status: "success",
            data: {newUser}
        })
    } catch (error) {
        return res.status(401).json({
            status: "failure", 
            message: error.message
        })
    }
}

async function getUsers(req, res){
    try {
        
    } catch (error) {
        
    }
}

module.exports = {
    addUsers,
    getUsers
}