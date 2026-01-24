const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

// In-memory storage for users
const users = [];

// Register a new user
const registerUser = async (username, password, email) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Check if user already exists
            const existingUser = users.find(
                (u) => u.username === username || u.email === email
            );

            if (existingUser) {
                return reject(new Error('Username or email already exists'));
            }

            // Hash password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create new user
            const newUser = {
                userId: uuidv4(),
                username,
                email,
                password: hashedPassword,
                createdAt: new Date()
            };

            users.push(newUser);
            resolve({ userId: newUser.userId, username: newUser.username });
        } catch (error) {
            reject(error);
        }
    });
};

// Find user by username
const findUserByUsername = async (username) => {
    return new Promise((resolve) => {
        const user = users.find((u) => u.username === username);
        resolve(user || null);
    });
};

// Validate user password
const validatePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

// Get user by ID
const getUserById = async (userId) => {
    return new Promise((resolve) => {
        const user = users.find((u) => u.userId === userId);
        resolve(user || null);
    });
};

module.exports = {
    registerUser,
    findUserByUsername,
    validatePassword,
    getUserById
};
