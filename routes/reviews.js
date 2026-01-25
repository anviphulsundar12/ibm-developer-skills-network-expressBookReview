const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const reviewController = require('../controllers/reviewController');

// Public route - get reviews for a book  
router.get('/:isbn/review', reviewController.getReviewsHandler);

// Protected routes - require authentication
// POST for adding new review
router.post('/:isbn/review', authenticateToken, reviewController.addReviewHandler);

// PUT for adding/modifying review (as required by assignment)
router.put('/:isbn/review', authenticateToken, reviewController.addReviewHandler);

// PUT for modifying specific review
router.put('/:isbn/review/:reviewId', authenticateToken, reviewController.modifyReviewHandler);

// DELETE for removing review
router.delete('/:isbn/review/:reviewId', authenticateToken, reviewController.deleteReviewHandler);

module.exports = router;
