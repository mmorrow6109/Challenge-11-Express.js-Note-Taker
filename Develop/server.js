const express = require('express');
const html_routes = require('./Routes/html-routes');
const api_routes = require('./Routes/api-routes');

const app = express();

const port = process.env.PORT || 3001;

//middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use('/', html_routes);
app.use('/api', api_routes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${port}! Visit http://localhost:${port} in your browser!`);
});

// Route for getting the home page
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
