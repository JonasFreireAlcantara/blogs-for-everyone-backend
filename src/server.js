const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();


// Database connection
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0-8rplu.mongodb.net/blog-db?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('error', () => {
    console.log('database: connection error');
});
mongoose.connection.once('open', () => {
    console.log('database: connection established');
});


// Generic configurations of server
app.use(express.json());
app.use(cors());


// Routes pattern
const routes = require('./routes');
app.use('/api', routes);


// Port configuration
const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log(`server: server listening at port: ${port}`);
});