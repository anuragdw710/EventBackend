const UserService = require('../services/user-service');

const userService = new UserService();
const addUser = async (req, res) => {
    try {
        const response = await userService.create(req.body);
        return res.status(200).json({
            "isSuccess": true,
            "response": response
        });
    } catch (error) {
        return res.status(500).json({
            "isSuccess": false,
            "response": {},
            "err": error
        })
    }
}

module.exports = {
    addUser,
}