const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/todo.router');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', router);

let { PORT, MONGODB_URL } = process.env;

PORT = PORT ?? 3004;

mongoose
  .connect(MONGODB_URL)
  .then(() => app.listen(PORT))
  .catch((err) => {
    console.error('Failed to connect to MongoDB Atlas:', err);
    process.exit(1);
  });
