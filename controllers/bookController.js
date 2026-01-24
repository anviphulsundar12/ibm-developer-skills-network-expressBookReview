const {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
} = require('../models/books');

// Get all books
const getBooksHandler = async (req, res) => {
    try {
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
};

// Get book by ISBN
const getBookByISBNHandler = async (req, res) => {
    try {
        const { isbn } = req.params;
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
};

// Get books by author
const getBooksByAuthorHandler = async (req, res) => {
    try {
        const { author } = req.params;
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
};

// Get books by title
const getBooksByTitleHandler = async (req, res) => {
    try {
        const { title } = req.params;
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
};

module.exports = {
    getBooksHandler,
    getBookByISBNHandler,
    getBooksByAuthorHandler,
    getBooksByTitleHandler
};
