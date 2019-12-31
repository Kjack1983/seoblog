/**
 * npm i express mongoose body-parser cookie-parser morgan nodemon dotenv cors
 */
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const hbs = require('hbs');
const dbConnection = require('./connection/db-connection');
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');    

require('dotenv').config();

// app
const app = express();

// Define paths for express config.
const publicDirectoryPath = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname, './templates/parts');


// Middlewares
app.use(morgan('dev')) // See the endpoint in the console.
//app.use(require('morgan')(config.format || 'dev', config.option || {}));
app.use(bodyParser.json());
app.use(cookieParser());

// cors to allow origin from backend frontend. 
if(process.env.NODE_ENV === 'development') {
    app.use(cors ('origin', `${process.env.CLIENT_URL}`));
}

//db connection
const dbconnectobj = new dbConnection();
dbconnectobj.connectToDb();

// register Partials.
hbs.registerPartials(partialsPath);

// Setup handlebars engine and view location.
app.set('view engine','hbs');
app.set('views', viewsPath);

//Set up static directory to serve with express.static.
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
    res.render('index', {
        headTitle: 'Wheather App',
        title: 'Wheather App',
        content: 'Lorum, Lorum, Lorum, Lorum, Lorum, Lorum, Lorum, Lorum, Lorum, Lorum, Lorum, Lorum, Lorum,',
        name:'Ioannis Martakis'
    });
});

// routes middleware
app.use('/api', blogRoutes);
app.use('/api', authRoutes);


// Port
const port = process.env.PORT || 8000;

// Listen
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});