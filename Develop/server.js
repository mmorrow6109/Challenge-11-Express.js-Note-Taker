const express = require('express');
const htmlRoutes = require('./Routes/html-routes.js');
const apiRoutes = require('./Routes/api-routes.js');

const port = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('Public'));
app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}! Visit http://localhost:${port} in your browser!`);
});

// Route for getting the home page
// app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'Public', 'index.html')));
