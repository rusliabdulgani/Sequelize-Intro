const express = require('express');
const db = require('../models');

var router = express.Router();




router.get('/', (req, res) =>{
  db.Student.findAll()
  .then( data => {
    res.render('students', {header: 'Students Page', data_students: data})
  })
})

router.post('/', (req,res) =>{
  let data = req.body;
  console.log(data);
  db.Student.create({
    first_name: data.First_name,
    last_name: data.Last_name,
    email: data.Email,
    jurusan: data.Jurusan
  })
  .then(() => {
    res.redirect('/students')
  })
  .catch(err => {
    console.log(err);
  })
})




module.exports = router;
