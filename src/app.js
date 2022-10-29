const path = require('path');
const express = require('express');
const hbs = require('hbs');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));
const app = express();

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//Setup handlbars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', { title: 'Weather App', name: 'HIS' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About', name: 'HIS' });
});
app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'Please contact to',
    title: 'Help',
    name: 'HIS',
  });
});

// app.get('/', (req, res) => {
//   res.send('Hello Express');
// });

// app.get('/help', (req, res) => {
//   res.send('Help Page');
// });

// app.get('/about', (req, res) => {
//   res.send('<h1>About Page</h1>');
// });

// app.get('/weather', (req, res) => {
//   res.send({
//     forecast: 'Rainy',
//     location: 'Guarda',
//   });
// });

app.listen(3000, () => {
  console.log('Server is up');
});