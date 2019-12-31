const express = require('express');
const router = express.Router();
const { time } = require('../controllers/blog');

router.get('/', time);

module.exports = router;
/* const express = require('express');
const router = express.Router();
const { time } = require('../controllers/blog');

router.get('/', time);

module.exports = router;
const express = require('express');
const router = express.Router();
const path = require('path');
const hbs = require('hbs');
const { time } = require('../controllers/blog');

// app
const app = express();

// Define paths for express config.
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/parts');

// register Partials.
hbs.registerPartials(partialsPath);

// Setup handlebars engine and view location.
app.set('view engine','hbs');
app.set('views', viewsPath);

//Set up static directory to serve with express.static.
app.use(express.static(publicDirectoryPath));

router.get('/', (req, res) => {
    res.render('index', {
        headTitle: 'Wheather App',
        title: 'Wheather App',
        content: 'Lorum, Lorum, Lorum, Lorum, Lorum, Lorum, Lorum, Lorum, Lorum, Lorum, Lorum, Lorum, Lorum,',
        name:'Ioannis Martakis'
    });
});

router.get('/time', time);

router.get('/about', (req, res) => {
    res.render('about', {
        headTitle: 'About Page',
        title: 'About Page',
        content: 'Breaking bad is one of my best series',
        name:'Ioannis Martakis'
    })
});

router.get('/help', (req, res) => {
    res.render('help', {
        headTitle: 'Help Page',
        title: 'Help Page',
        content: 'Sons of Anarchy',
        helpText: 'This is only for help page',
        name:'Ioannis Martakis'
    })
});

router.get('/help/*', (req, res) => {
    res.render('404', {
        //title: 'Page not found 404',
        headTitle: 'Article page',
        notFound: 'Help article list not found',
        content: 'Help article list never found 404',
        name:'Ioannis Martakis'
    });
});


router.get('*', (req, res) => {
    res.render('404',{
        //title: 'Page not found 404',
        headTitle: '404 page',
        notFound: 'Page not found 404',
        content: 'This page is not Found',
        name:'Ioannis Martakis'
    });
});

module.exports = router; */