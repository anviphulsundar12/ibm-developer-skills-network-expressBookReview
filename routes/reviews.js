const express = require('express');
const router = express.Router();
const {
    getReviewsHandler,
    addReviewHandler,
    modifyReviewHandler,
    deleteReviewHandler
} = require('../controllers/reviewController');
const { authenticateToken } = require('../middleware/auth');

// Public route to get reviews
router.get('/:isbn/reviews', getReviewsHandler);

// Protected routes (require authentication)
router.post('/:isbn/reviews', authenticateToken, addReviewHandler);
router.put('/:isbn/reviews/:reviewId', authenticateToken, modifyReviewHandler);
router.delete('/:isbn/reviews/:reviewId', authenticateToken, deleteReviewHandler);

module.exports = router;
