const {
    getReviewsByISBN,
    addOrUpdateReview,
    getReviewById,
    updateReview,
    deleteReview
} = require('../models/reviews');
const { getBookByISBN } = require('../models/books');
const { validateRating } = require('../utils/validators');

// Get all reviews for a book
const getReviewsHandler = async (req, res) => {
    try {
        const { isbn } = req.params;

        // Check if book exists
        const book = await getBookByISBN(isbn);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: 'Book not found with the provided ISBN'
            });
        }

        const reviews = await getReviewsByISBN(isbn);

        res.status(200).json({
            success: true,
            count: reviews.length,
            data: reviews
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving reviews',
            error: error.message
        });
    }
};

// Add or update a review (authenticated users only)
const addReviewHandler = async (req, res) => {
    try {
        const { isbn } = req.params;
        const { rating, comment } = req.body;
        const { userId, username } = req.user;

        // Validate input
        if (!rating) {
            return res.status(400).json({
                success: false,
                message: 'Rating is required'
            });
        }

        if (!validateRating(rating)) {
            return res.status(400).json({
                success: false,
                message: 'Rating must be an integer between 1 and 5'
            });
        }

        // Check if book exists
        const book = await getBookByISBN(isbn);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: 'Book not found with the provided ISBN'
            });
        }

        // Add or update review
        const review = await addOrUpdateReview(
            isbn,
            userId,
            username,
            Number(rating),
            comment || ''
        );

        res.status(201).json({
            success: true,
            message: 'Review added/updated successfully',
            data: review
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error adding review',
            error: error.message
        });
    }
};

// Modify a review (user can only modify their own)
const modifyReviewHandler = async (req, res) => {
    try {
        const { isbn, reviewId } = req.params;
        const { rating, comment } = req.body;
        const { userId } = req.user;

        // Validate input
        if (!rating) {
            return res.status(400).json({
                success: false,
                message: 'Rating is required'
            });
        }

        if (!validateRating(rating)) {
            return res.status(400).json({
                success: false,
                message: 'Rating must be an integer between 1 and 5'
            });
        }

        // Get review
        const review = await getReviewById(reviewId);

        if (!review) {
            return res.status(404).json({
                success: false,
                message: 'Review not found'
            });
        }

        // Check authorization
        if (review.userId !== userId) {
            return res.status(403).json({
                success: false,
                message: 'You can only modify your own reviews'
            });
        }

        // Check if review belongs to the book
        if (review.bookIsbn !== isbn) {
            return res.status(400).json({
                success: false,
                message: 'Review does not belong to this book'
            });
        }

        // Update review
        const updatedReview = await updateReview(
            reviewId,
            Number(rating),
            comment || ''
        );

        res.status(200).json({
            success: true,
            message: 'Review updated successfully',
            data: updatedReview
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating review',
            error: error.message
        });
    }
};

// Delete a review (user can only delete their own)
const deleteReviewHandler = async (req, res) => {
    try {
        const { isbn, reviewId } = req.params;
        const { userId } = req.user;

        // Get review
        const review = await getReviewById(reviewId);

        if (!review) {
            return res.status(404).json({
                success: false,
                message: 'Review not found'
            });
        }

        // Check authorization
        if (review.userId !== userId) {
            return res.status(403).json({
                success: false,
                message: 'You can only delete your own reviews'
            });
        }

        // Check if review belongs to the book
        if (review.bookIsbn !== isbn) {
            return res.status(400).json({
                success: false,
                message: 'Review does not belong to this book'
            });
        }

        // Delete review
        await deleteReview(reviewId);

        res.status(200).json({
            success: true,
            message: 'Review deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting review',
            error: error.message
        });
    }
};

module.exports = {
    getReviewsHandler,
    addReviewHandler,
    modifyReviewHandler,
    deleteReviewHandler
};
