const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
 
connectDB()
const app = express();

// ✅ Make sure these come BEFORE the routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ✅ Then define your routes
app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// ✅ Error handler middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
