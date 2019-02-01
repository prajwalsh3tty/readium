const app = require('express');
const router= app.Router();
const mongoose=require('mongoose');
const Story=mongoose.model('stories');
const {ensureAuthenticated,ensureGuest}=require('../helpers/auth');


router.get('/',ensureGuest, (req, res) => {
    res.render('index/welcome');
  
 });


 router.get('/dashboard',ensureAuthenticated, (req, res) => {
    
   Story.find({user:req.user.id})
   .then(stories=>{
   res.render('index/dashboard',{
      stories :stories
   });
     
   });
 
 });

 router.get('/about', (req, res) => {
   res.render('index/about');

});

 module.exports=router;