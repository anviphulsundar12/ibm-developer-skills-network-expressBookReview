const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const { loadBooks } = require('./models/books');
const errorHandler = require('./middleware/errorHandler');

// Import routes
const booksRoutes = require('./routes/books');
const authRoutes = require('./routes/auth');
const reviewsRoutes = require('./routes/reviews');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: '*', // Allow all origins for local network access
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (web interface)
app.use(express.static('public'));

// Session configuration
app.use(
    session({
        secret: process.env.SESSION_SECRET || 'default_session_secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: parseInt(process.env.SESSION_TIMEOUT) || 1800000, // 30 minutes
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production' // Use secure cookies in production
        }
    })
);

// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Online Book Review Application API',
        version: '1.0.0',
        endpoints: {
            books: '/books',
            auth: '/auth',
            reviews: '/books/:isbn/reviews'
        }
    });
});

app.use('/books', booksRoutes);
app.use('/auth', authRoutes);
app.use('/books', reviewsRoutes);

// Error handler (must be last)
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Initialize server
const startServer = async () => {
    try {
        // Load books data
        await loadBooks();

        // Start server
        app.listen(PORT, '0.0.0.0', () => {
            const os = require('os');
            const networkInterfaces = os.networkInterfaces();
            let localIP = 'localhost';

            // Find local IP address
            for (const interfaceName in networkInterfaces) {
                for (const iface of networkInterfaces[interfaceName]) {
                    if (iface.family === 'IPv4' && !iface.internal) {
                        localIP = iface.address;
                        break;
                    }
                }
            }

            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
            console.log(`🚀 Server running on:`);
            console.log(`   Local:   http://localhost:${PORT}`);
            console.log(`   Network: http://${localIP}:${PORT}`);
            console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
        });
    } catch (error) {
        console.error('Failed to start server:', error.message);
        process.exit(1);
    }
};

// Start the server
startServer();

module.exports = app;
