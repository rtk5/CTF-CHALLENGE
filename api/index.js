const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser());

// Middleware to handle cookie modification
app.use((req, res, next) => {
    if (req.cookies.admin === 'true') {
        res.send('Flag: IEEE{U_must34_really_reall77_lik3_c00ki6s}');
        return;
    }
    next();
});

// Export the Express app to a serverless function
module.exports = app;
