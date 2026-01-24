const express = require('express');
const router = express.Router();
const {
    getBooksHandler,
    getBookByISBNHandler,
    getBooksByAuthorHandler,
    getBooksByTitleHandler
} = require('../controllers/bookController');

// Public routes for books
router.get('/', getBooksHandler);
router.get('/isbn/:isbn', getBookByISBNHandler);
router.get('/author/:author', getBooksByAuthorHandler);
router.get('/title/:title', getBooksByTitleHandler);

module.exports = router;
