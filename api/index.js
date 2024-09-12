const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

// Middleware to handle cookie modification
app.use((req, res, next) => {
    if (req.cookies.admin === 'true') {
        res.send('Flag: IEEE{U_must34_really_reall77_lik3_c00ki6s}');
    } else {
        next();
    }
});

// Route to handle the main page
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the CTF Challenge</h1><p>Change the cookie to see the flag.</p>');
});

module.exports = app;
