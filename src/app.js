const express = require('express');
const userRoutes = require('./routes/user');
const assignmentRoutes = require('./routes/assignment');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/assignments', assignmentRoutes);

module.exports = app;
