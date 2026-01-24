# Book Review Application

A RESTful API for managing book reviews built with Node.js and Express.js.

## Features

- Browse and search books by ISBN, author, or title
- User registration and authentication
- Add, modify, and delete book reviews (authenticated users only)
- JWT and session-based authentication
- Async/await for concurrent operations

## Installation

```bash
npm install
```

## Configuration

Create a `.env` file:
```env
PORT=5000
JWT_SECRET=your_jwt_secret
SESSION_SECRET=your_session_secret
```

## Running the Application

```bash
npm start
```

The server will start on http://localhost:5000

## API Endpoints

### Public Routes

- `GET /books` - Get all books
- `GET /books/isbn/:isbn` - Get book by ISBN
- `GET /books/author/:author` - Search books by author
- `GET /books/title/:title` - Search books by title
- `GET /books/:isbn/reviews` - Get reviews for a book

### Authentication

- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user

### Protected Routes (requires JWT token)

- `POST /books/:isbn/reviews` - Add/update review
- `PUT /books/:isbn/reviews/:reviewId` - Modify review
- `DELETE /books/:isbn/reviews/:reviewId` - Delete review

## Example Usage

### Register a user
```bash
curl -X POST http://localhost:5000/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"john","password":"pass123","email":"john@example.com"}'
```

### Login
```bash
curl -X POST http://localhost:5000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"john","password":"pass123"}'
```

### Add a review (use token from login)
```bash
curl -X POST http://localhost:5000/books/ISBN/reviews \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"rating":5,"comment":"Great book!"}'
```

## Project Structure

```
├── server.js           # Main application
├── routes/             # API routes
├── controllers/        # Business logic
├── models/             # Data models
├── middleware/         # Authentication middleware
├── utils/              # Helper functions
└── data/               # Book data
```

## Technologies Used

- Node.js
- Express.js
- JWT (jsonwebtoken)
- bcrypt
- express-session
- axios

## License

ISC
