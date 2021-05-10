// Require modules
const express= require('express');
const morgan = require('morgan');
const port = process.env.PORT || 3000
require('dotenv').config()

// Connect to DB
require('./config/database')

// Require Routers

// Set up express app
const app = express()

// Configure the app with app.set()

// Mount middleware with app.use()
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Mount routes with app.use()

app.listen(port, function(){
    console.log(`Express is listening on port: ${port}`)
})