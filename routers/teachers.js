const express = require('express');
const db = require('../models');

var router = express.Router();


router.get('/', (req, res) => {
  console.log('--------');
  db.Teacher.findAll()
  .then( data =>{
    res.render('teachers', {header: 'Teachers Page', data_teacher : data})
  })
})


module.exports = router;
