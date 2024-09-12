module.exports = (req, res) => {
    res.cookie('admin', 'false'); // Set initial cookie to false
    res.send('<h1>Cookie has been set to false</h1><p>Change the cookie value to true to see the flag.</p>');
};
