const fs = require('fs').promises;
const path = require('path');

// In-memory storage for books
let booksData = {};

// Load books from JSON file
const loadBooks = async () => {
  try {
    const filePath = path.join(__dirname, '../data/books.json');
    const data = await fs.readFile(filePath, 'utf8');
    booksData = JSON.parse(data);
    console.log('Books data loaded successfully');
    return booksData;
  } catch (error) {
    console.error('Error loading books:', error.message);
    booksData = {};
    return booksData;
  }
};

// Get all books
const getAllBooks = async () => {
  return new Promise((resolve) => {
    resolve(Object.values(booksData));
  });
};

// Get book by ISBN
const getBookByISBN = async (isbn) => {
  return new Promise((resolve) => {
    const book = Object.values(booksData).find(
      (book) => book.isbn === isbn
    );
    resolve(book || null);
  });
};

// Get books by author
const getBooksByAuthor = async (author) => {
  return new Promise((resolve) => {
    const books = Object.values(booksData).filter(
      (book) => book.author.toLowerCase().includes(author.toLowerCase())
    );
    resolve(books);
  });
};

// Get books by title
const getBooksByTitle = async (title) => {
  return new Promise((resolve) => {
    const books = Object.values(booksData).filter(
      (book) => book.title.toLowerCase().includes(title.toLowerCase())
    );
    resolve(books);
  });
};

module.exports = {
  loadBooks,
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
};
