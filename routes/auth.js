const app = require('express');
const router= app.Router();
const passport=require('passport');



router.get('/google',passport.authenticate('google',{scope:['profile','email']}));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  });




module.exports=router;