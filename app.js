const fs = require(`fs`);
const path = require(`path`);
const express = require(`express`);
const app = express();
const morgan = require('morgan');
const user = require(`./src/routes/user`);



app.use(`/user`, user)
app.use(morgan('common')); 
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
}); ``
app.get('/', (req, res) => {
    // res.render(`index`);
    res.render('index', {subtitle: 'This is subtitle'});
});