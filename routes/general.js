const express = require('express');
const router = express.Router();
const axios = require('axios');

// Routes using async/await for book operations
const BASE_URL = 'http://localhost:5001';

// Get all books using async/await
router.get('/all', async (req, res) => {
    try {
        // Using async/await to get all books
        const {
            getAllBooks
        } = require('../models/books');

        const books = await getAllBooks();

        res.status(200).json({
            success: true,
            count: books.length,
            data: books
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving books',
            error: error.message
        });
    }
});

// Get book details based on ISBN using async/await with Axios
router.get('/isbn/:isbn', async (req, res) => {
    try {
        const { isbn } = req.params;
        const {
            getBookByISBN
        } = require('../models/books');

        // Using async/await to get book by ISBN
        const book = await getBookByISBN(isbn);

        if (!book) {
            return res.status(404).json({
                success: false,
                message: 'Book not found with the provided ISBN'
            });
        }

        res.status(200).json({
            success: true,
            data: book
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving book',
            error: error.message
        });
    }
});

// Get books by author using async/await
router.get('/author/:author', async (req, res) => {
    try {
        const { author } = req.params;
        const {
            getBooksByAuthor
        } = require('../models/books');

        // Using async/await to get books by author
        const books = await getBooksByAuthor(author);

        res.status(200).json({
            success: true,
            count: books.length,
            data: books
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving books by author',
            error: error.message
        });
    }
});

// Get books by title using async/await
router.get('/title/:title', async (req, res) => {
    try {
        const { title } = req.params;
        const {
            getBooksByTitle
        } = require('../models/books');

        // Using async/await to get books by title
        const books = await getBooksByTitle(title);

        res.status(200).json({
            success: true,
            count: books.length,
            data: books
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error retrieving books by title',
            error: error.message
        });
    }
});

// Alternative implementations using Axios for API calls

// Example: Get all books using Axios (if calling external API)
router.get('/axios/all', async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error with Axios request',
            error: error.message
        });
    }
});

// Example: Get book by ISBN using Axios
router.get('/axios/isbn/:isbn', async (req, res) => {
    try {
        const { isbn } = req.params;
        const response = await axios.get(`${BASE_URL}/books/isbn/${isbn}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error with Axios request',
            error: error.message
        });
    }
});

// Example: Get books by author using Axios
router.get('/axios/author/:author', async (req, res) => {
    try {
        const { author } = req.params;
        const response = await axios.get(`${BASE_URL}/books/author/${encodeURIComponent(author)}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error with Axios request',
            error: error.message
        });
    }
});

// Example: Get books by title using Axios
router.get('/axios/title/:title', async (req, res) => {
    try {
        const { title } = req.params;
        const response = await axios.get(`${BASE_URL}/books/title/${encodeURIComponent(title)}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error with Axios request',
            error: error.message
        });
    }
});

module.exports = router;
