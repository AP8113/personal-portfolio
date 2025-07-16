const express = require('express');
const cors = require('cors');
const path = require('path');
const contactRoute = require('./routes/contact');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/contact', contactRoute);

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
