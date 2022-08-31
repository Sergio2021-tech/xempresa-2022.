const express = require('express');
const path = require('path');
const engine = require('ejs-mate');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');

// initializations
const app = express();
require('./database');
require('./passport/local-auth');

app.use(express.static(path.join(__dirname, 'public')))


// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', engine);
app.set('view engine', 'ejs');
//app.engine('jsx', require('ejs').renderFile);

//app.engine('jsx', engine);//
//app.set('view engine', 'jsx');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(session({
  secret: 'mysecretsession',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  app.locals.signinMessage2 = req.flash('signinMessage2');
  app.locals.signupMessage = req.flash('signupMessage');
  app.locals.user = req.user;
  console.log(app.locals)
  next();
});

// routes
app.use('/', require('./routes/index'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});

app.use('/images', express.static('images'));
app.use('/html', express.static('html'));
app.use('/fonts', express.static('fonts'));
app.use('/js', express.static('js'));
app.use('/css', express.static('css/style.css'));
app.use('/css', express.static('css/estilos.css'));
//app.use('/jsx', express.static('jsx'));


app.use('/public', express.static('public'));  //funcional dashboard
app.use('/pages', express.static('pages'));  //funcional dashboard


const router = express.Router()
router.get('/',(req, res, next) => {
  res.render('index')
})

