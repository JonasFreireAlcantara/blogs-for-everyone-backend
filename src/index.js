const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const { errors: celebrateErrors } = require('celebrate');
const { errors: personalErrors } = require('./middlewares/errors');

const routes = require('./routes');
const { cloudinaryConfig } = require('./middlewares/cloudinaryConfig');

dotenv.config();
const app = express();

// Database connection
const username = process.env.DATABASE_MONGO_ATLAS_USERNAME;
const password = process.env.DATABASE_MONGO_ATLAS_PASSWORD;
mongoose.connect(
  `mongodb+srv://${username}:${password}@cluster0-8rplu.mongodb.net/blog-db?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on('error', () => {
  console.log('database: connection error');
});
mongoose.connection.once('open', () => {
  console.log('database: connection established');
});

// Generic middlewares of server
app.use(cors());
app.use(express.json());
app.use(cloudinaryConfig);

// Routes pattern
app.use('/api', routes);

// Celebrate errors handler
app.use(celebrateErrors());
app.use(personalErrors());

// Port configuration
const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`server: server listening at port: ${port}`);
});
