const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT ;
const morgan = require('morgan');
const path = require('path');1
const cors = require('cors');
const studentRoutes = require('./src/routes/student.routes');
const authRoutes = require('./src/routes/auth.routes');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
    console.log(`Incoming Request : ${req.method} ${req.url}`);
    next();
});

/* Routes */
app.use('/api/student',studentRoutes);
app.use('/api/user',authRoutes);

app.listen(port, async () => {
    mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.log('DB connected successfully...'))
    .catch((err) => console.log('DB is not connected',err.message));
    console.log(`Server start at port http://localhost:${port}`);
});