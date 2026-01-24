// Validate email format
const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Validate password strength (minimum 6 characters)
const validatePassword = (password) => {
    return password && password.length >= 6;
};

// Validate username (alphanumeric, 3-20 characters)
const validateUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    return usernameRegex.test(username);
};

// Validate rating (1-5)
const validateRating = (rating) => {
    const numRating = Number(rating);
    return Number.isInteger(numRating) && numRating >= 1 && numRating <= 5;
};

module.exports = {
    validateEmail,
    validatePassword,
    validateUsername,
    validateRating
};
