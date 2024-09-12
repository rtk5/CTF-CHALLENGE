module.exports = (req, res) => {
    res.send('User-agent: *\nDisallow: /hidden-url');
};
