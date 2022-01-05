require('dotenv').config();
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set api routes (form handling)
app.use('/api', apiRoutes);

app.listen(PORT, () => {});
