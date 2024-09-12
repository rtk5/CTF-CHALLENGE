const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3001;


app.use(cookieParser());

// Middleware to handle cookie modification
app.use((req, res, next) => {
    // Check if the 'admin' cookie is set to 'true'
    if (req.cookies.admin === 'true') {
        res.send('Flag: IEEE{U_must34_really_reall77_lik3_c00ki6s}');
        return;
    }
    next();
});

// Route to set the 'admin' cookie
app.get('/set-cookie', (req, res) => {
    res.cookie('admin', 'false'); // Set initial cookie
    res.send('<h1>Cookie has been set to false</h1><p>Change the cookie value to true to see the flag.</p>');
});

// Main page
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the CTF Challenge</h1><p>Change the cookie to see the flag.</p>');
});

// Secret page
app.get('/secret', (req, res) => {
    res.send('<h1>Secret Page</h1><p>Change the cookie to admin=true to see the flag.</p>');
});

// Robots.txt
app.get('/robots.txt', (req, res) => {
    res.send('User-agent: *\nDisallow: /hidden-url');
});

// Hidden URL
app.get('/hidden-url', (req, res) => {
    res.send('<h1>Hidden URL</h1><p>Change your user agent to see the flag.</p>');
});

// Simple SQL Injection Example (simulated)
app.get('/sqli', (req, res) => {
    const query = req.query.query || '';
    if (query.includes("admin' --")) {
        res.send('SQLi worked!');
    } else {
        res.send('Try injecting something like `admin\' --`');
    }
});

app.listen(port, () => {
    console.log(`CTF challenge app listening at http://localhost:${port}`);
});
