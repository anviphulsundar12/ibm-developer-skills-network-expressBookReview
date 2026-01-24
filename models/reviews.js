const { v4: uuidv4 } = require('uuid');

// In-memory storage for reviews
const reviews = [];

// Get all reviews for a book
const getReviewsByISBN = async (isbn) => {
    return new Promise((resolve) => {
        const bookReviews = reviews.filter((r) => r.bookIsbn === isbn);
        resolve(bookReviews);
    });
};

// Add or update a review
const addOrUpdateReview = async (bookIsbn, userId, username, rating, comment) => {
    return new Promise((resolve) => {
        // Check if user already reviewed this book
        const existingReviewIndex = reviews.findIndex(
            (r) => r.bookIsbn === bookIsbn && r.userId === userId
        );

        if (existingReviewIndex !== -1) {
            // Update existing review
            reviews[existingReviewIndex].rating = rating;
            reviews[existingReviewIndex].comment = comment;
            reviews[existingReviewIndex].updatedAt = new Date();
            resolve(reviews[existingReviewIndex]);
        } else {
            // Create new review
            const newReview = {
                reviewId: uuidv4(),
                bookIsbn,
                userId,
                username,
                rating,
                comment,
                createdAt: new Date(),
                updatedAt: new Date()
            };
            reviews.push(newReview);
            resolve(newReview);
        }
    });
};

// Get review by ID
const getReviewById = async (reviewId) => {
    return new Promise((resolve) => {
        const review = reviews.find((r) => r.reviewId === reviewId);
        resolve(review || null);
    });
};

// Update a review
const updateReview = async (reviewId, rating, comment) => {
    return new Promise((resolve, reject) => {
        const reviewIndex = reviews.findIndex((r) => r.reviewId === reviewId);

        if (reviewIndex === -1) {
            return reject(new Error('Review not found'));
        }

        reviews[reviewIndex].rating = rating;
        reviews[reviewIndex].comment = comment;
        reviews[reviewIndex].updatedAt = new Date();

        resolve(reviews[reviewIndex]);
    });
};

// Delete a review
const deleteReview = async (reviewId) => {
    return new Promise((resolve, reject) => {
        const reviewIndex = reviews.findIndex((r) => r.reviewId === reviewId);

        if (reviewIndex === -1) {
            return reject(new Error('Review not found'));
        }

        const deletedReview = reviews.splice(reviewIndex, 1)[0];
        resolve(deletedReview);
    });
};

module.exports = {
    getReviewsByISBN,
    addOrUpdateReview,
    getReviewById,
    updateReview,
    deleteReview
};
