const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const product = require('./routes/product.route'); // Imports routes for the products

dotenv.config()
// Set up mongoose connection
const mongoose = require('mongoose');
// let dev_db_url = ;
console.log(process.env.MONGO_URI)
let mongoDB = process.env.MONGO_URI;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// initialize our express app
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product);



let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});