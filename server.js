// Require modules
const express= require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const port = process.env.PORT || 3000;
require('dotenv').config();

// Connect to DB
require('./config/database');

// Require Routers
const indexRouter = require('./routes/index');
const reviewsRouter = require('./routes/reviews');

// Set up express app
const app = express();

// Configure the app with app.set()
app.set('view engine', 'ejs');

// Mount middleware with app.use()
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Mount routes with app.use()
app.use('/', indexRouter);
app.use('/movies', reviewsRouter);

app.listen(port, function(){
    console.log(`Express is listening on port: ${port}`)
});