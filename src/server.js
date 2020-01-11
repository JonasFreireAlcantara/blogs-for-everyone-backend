const express = require('express');
const app = express();


const routes = require('./routes');

app.use('/api', routes);



const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});