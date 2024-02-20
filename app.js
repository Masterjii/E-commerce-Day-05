

const express = require('express');
const app = express();  
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');
const authRoutes = require('./routes/auth');   //passport
const passport = require('passport');  //passport
const LocalStrategy = require('passport-local').Strategy;     //passport
const User = require('./models/User');   //passport



let configSesion = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  };


mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/BigProject')
.then(()=>{console.log("db connected")})
.catch((err)=>{console.log("error is:", err)})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname, 'public')))    // Static files

app.use(express.urlencoded({extended:true}))  // form data ke liye body parser
app.use(methodOverride('_method'))


// expess-session middleware -
app.use(session(configSesion));
app.use(flash());   // ese hamesha session ke bad hi likhte h

// passport ko always session ke bad hi use krte h

app.use(passport.initialize());  //passport
app.use(passport.session());     //passport
// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
// passport.use(User.createStrategy());  //passport  
passport.serializeUser(User.serializeUser());   //passport
passport.deserializeUser(User.deserializeUser());   //passport

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

app.use( (req,res,next)=>{
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  next();
});

// seedDB()   // Bar bar store ho jata h, if not commented

// Ye ⬇️ har request pr check krega ki product hein ki nhi

// Routes 
app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);

let PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`server is connected at port: ${PORT}`);
})

// Step 01 - Basic server
// Step 02 - mangoose connection
// Step 03 - Model -> seed data
// Step 04 - Routes -> views

// Step 05 - rating Schema -> Product change -> Form to add rating and comment -> show.ejs















