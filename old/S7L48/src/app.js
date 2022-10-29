const path = require('path');
const express = require('express');

console.log(__dirname);
console.log(path.join(__dirname, '../public'));
const app = express();

const pathPublicFiles = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(pathPublicFiles));

app.get('', (req, res) => {
  res.render('index', { title: 'Weather App', name: 'HIS' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About', name: 'HIS' });
});
app.get('/help', (req, res) => {
  res.render('help', { message: 'Please contact', name: 'HIS' });
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
