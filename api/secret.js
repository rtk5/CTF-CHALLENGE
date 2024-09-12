module.exports = (req, res) => {
    if (req.cookies.admin === 'true') {
        res.send('Flag: IEEE{U_must34_really_reall77_lik3_c00ki6s}');
    } else {
        res.send('<h1>Secret Page</h1><p>Change the cookie to admin=true to see the flag.</p>');
    }
};
