const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use('local-signup', new LocalStrategy({
  nombreField: 'nombre',
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, nombre,direccion, done) => {
  const user = await User.findOne({'email': email})

  console.log(user)
  if(user) {
    return done(null, false, req.flash('signupMessage', 'The Email is already Taken.'));
  } 
  else {    
    const newUser = new User();
    //nombre= req.param('nombre');
    newUser.email = email;
    newUser.nombre = nombre;
    newUser.direccion = direccion;
    newUser.password = newUser.encryptPassword(password);
    console.log(newUser)
    await newUser.save();
    done(null, newUser);
  }
}));

passport.use('local-signin', new LocalStrategy({
  nombreField: 'nombre',
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, nombre,direccion, done) => {
  const user = await User.findOne({email: email});

  if(!user) {
    return done(null, false, req.flash('signinMessage2', 'Usuario no encontrado'));
  }
  if(!user.comparePassword(password)) {
    return done(null, false, req.flash('signinMessage2', 'Incorrect Password'));
  }
  return done(null, user);
}));
