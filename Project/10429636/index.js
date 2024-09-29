const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();

// Connect to the SQLite database
const db = new sqlite3.Database('./database/theme_park.db', (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        console.log("Connected to the SQLite database.");
    }
});

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to the Theme Park!' });
});

// Areas route
app.get('/areas', (req, res) => {
    db.all('SELECT * FROM areas', [], (err, rows) => {
        if (err) throw err;
        res.render('areas', { areas: rows });
    });
});

// Attractions route
app.get('/attractions', (req, res) => {
    db.all('SELECT * FROM attractions', [], (err, rows) => {
        if (err) throw err;
        res.render('attractions', { attractions: rows });
    });
});

// Attractions by Area ID route
app.get('/attractions/:area_id', (req, res) => {
    const areaId = req.params.area_id;
    db.all('SELECT * FROM attractions WHERE area_id = ?', [areaId], (err, rows) => {
        if (err) throw err;
        res.render('attractions', { attractions: rows });
    });
});

// FAQ route
app.get('/faq', (req, res) => {
    res.render('faq');
});

// Contact page route (GET)
app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    const query = `INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)`;
    db.run(query, [name, email, message], function(err) {
        if (err) {
            console.error(err.message);
            res.status(500).send("There was an error processing your request.");
        } else {
            // Render the contact page with a flag indicating success
            res.render('contact', { showThankYou: true });
        }
    });
});


// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
