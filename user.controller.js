const userService = require('./user.service');

const addUserController = (req, res) => {
    const userData = req.body;

    if (!userData.name || !userData.email) {
        return res.status(400).json({ message: "Name & Email required!" });
    }

    const newUser = userService.addUser(userData);
    res.status(201).json({
        message: "User added successfully",
        data: newUser
    });
};

const getUsersController = (req, res) => {
    const users = userService.getUsers();
    res.status(200).json({ data: users });
};

module.exports = { addUserController, getUsersController };
