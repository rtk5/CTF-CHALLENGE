module.exports = (req, res) => {
    const query = req.query.query || '';
    if (query.includes("admin' --")) {
        res.send('SQLi worked!');
    } else {
        res.send('Try injecting something like `admin\' --`');
    }
};
