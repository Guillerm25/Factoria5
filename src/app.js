const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const exphbs = require('express-handlebars');
const { MulterError } = require('multer');


//Iniciales
require('dotenv').config()

const app = express();
require('./database');

//Propiedades
app.set('view engine', '.ejs');

app.use(express.static(__dirname + "/public"));
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '/views' ));


// Middles
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer({storage}).single('image'));

//routes
var mainRoutes = require('./routes');
app.use(mainRoutes);

//EXPORTS
module.exports = app;