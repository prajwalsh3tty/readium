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

  router.get('/verify',(req,res)=>{
    if(req.user){
      console.log(req.user);
    }
    else{
      console.log('not auth');

    }

  });


  router.get('/logout',(req,res)=>{
   req.logout();
   res.redirect('/');

  });

module.exports=router;