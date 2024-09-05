const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
//const db = new sqlite3.Database('./database/theme_park.db'); 

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to the Theme Park!' });
});
app.get('/areas', (req, res) => {
    db.all('SELECT * FROM areas', [], (err, rows) => {
        if (err) throw err;
        res.render('areas', { areas: rows });
    });
});
app.get('/attractions', (req, res) => {
    db.all('SELECT * FROM attractions', [], (err, rows) => {
        if (err) throw err;
        res.render('attractions', { attractions: rows });
    });
});
app.get('/attractions/:area_id', (req, res) => {
    const areaId = req.params.area_id;
    db.all('SELECT * FROM attractions WHERE area_id = ?', [areaId], (err, rows) => {
        if (err) throw err;
        res.render('attractions', { attractions: rows });
    });
});
app.get('/faq', (req, res) => {
    res.render('faq');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.post('/contact', (req, res) => {
    // Process form data here 
    res.send('Thank you for contacting us!');
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});