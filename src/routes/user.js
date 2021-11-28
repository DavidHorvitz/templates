const express = require(`express`);
const router = express.Router();


router.get('/:name/:id', (req, res) => {
    // res.send(`User ${req.params.name} entered the system. The ID is ${req.params.id}`);
    res.render('user', { name: req.params.name, id: req.params.id });
});

router.get(`/about-me`, (req, res) => {
    res.render(`about-me`,{subtitle: 'This is subtitle'});

});
module.exports = router;