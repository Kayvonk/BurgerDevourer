// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');

// Create express app instance.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Initiate MySQL Connection.
connection.connect((err) => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`);
});

// Import routes and give the server access to them.
const routes = require('./controllers/burgers_controller');

app.use(routes);

// HTML Routes
app.get('/', (req, res) => res.render('index'));

app.post('/', (req, res) => {
    connection.query(
        'INSERT INTO burgers (burger) VALUES (?)',
        [req.body.burger],
        (err, result) => {
            if (err) throw err;

            res.redirect('/');
        }
    );
});


// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
    console.log(`Server listening on: http://localhost:${PORT}`)
);
