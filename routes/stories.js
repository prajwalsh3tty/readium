const app = require('express');
const router= app.Router();
//stories index(public)
router.get('/',(req,res)=>{
    res.render('stories/index');
})

//add 

router.get('/add',(req,res)=>{
    res.render('stories/add');
})

module.exports=router;