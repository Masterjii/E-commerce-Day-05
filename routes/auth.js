
const express = require('express');
const User = require('../models/User');
const passport = require('passport');
const router = express.Router();  // mini application


// auth signup route -
router.get('/register', (req,res)=>{
    try{
        res.render('auth/signup');

    }
    catch(e){
        res.status(500).render('error', {err : e.message})
    }

})

router.post('/register', async(req,res)=>{
    try{
        let { username, password, email, gender} = req.body;
        let user = new User({ username, email, gender});
        let newUser = await User.register(user , password);
        res.send(newUser);
    }
    catch(e){
        res.status(500).render('error', {err : e.message})
    }

})

// auth login route -
router.get('/login', (req,res)=>{
    try{
        res.render('auth/login');

    }
    catch(e){
        res.status(500).render('error', {err : e.message})
    }

})

router.post('/login',
  passport.authenticate('local', 
  {
     failureRedirect: '/login', 
     failureMessage: true 
  }),
  function(req, res) {
    req.flash('success', 'Welcome Back');
    res.redirect('/products');
  });

// auth logout route -
router.get('/logout', (req,res)=>{
try{
    req.logout(()=>{
        req.flash('success', 'Logged out Successfuly');
        res.redirect('/login');
    })
}
catch(e){
    res.status(500).render('error', {err : e.message})
}

})  

module.exports = router;

















