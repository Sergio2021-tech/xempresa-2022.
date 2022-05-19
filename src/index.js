app.use('/css', express.static('css'));

const flash = require('connect-flash/lib/flash');
const passport = require('passport');
const engine = require('ejs-mate')
const router = require('express').Router();
const app = express();
const express = require('express');
const { route } = require('./routes/index');
app.set('port', process.env.PORT || 3000);

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, re, next) =>{
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.signupMessage = req.flash('signinMessage');
    console.log(app.locals);
    app.locals.user = req.user;
    next();
});

app.use('/',require('./routes/index'));


app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});


router.get('/',(req, res, next) => {
  res.render('index')
})


