const express = require('express');


var router = express.Router();


router.get('/', (req, res) =>{
  res.render('index', {header: 'School App'})
})



module.exports = router;
