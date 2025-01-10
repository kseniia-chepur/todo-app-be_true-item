const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

let { PORT, MONGODB_URL } = process.env;

PORT ?? 3004;


mongoose
  .connect(MONGODB_URL)
  .then(() => app.listen(PORT))
  .catch((err) => {
    console.error('Failed to connect to MongoDB Atlas:', err);
    process.exit(1);
  });
