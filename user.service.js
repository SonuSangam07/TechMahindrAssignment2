let users = []; // temporary in-memory storage

const addUser = (user) => {
    users.push(user);
    return user;
};

const getUsers = () => {
    return users;
};

module.exports = { addUser, getUsers };
