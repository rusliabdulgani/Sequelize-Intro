const express = require('express');
const db = require('../models');

var router = express.Router();

router.get('/', (req, res) => {
  db.Subject.findAll({
    include: [db.Teacher]
  })
  .then( data => {
      res.render('subjects', {header: 'Subject Page', data_subject: data, data_kosong: 'Belum ada guru'})
      console.log(`--------------------- ${data[0].Teachers[0].first_name}`);
    })
})

router.post('/', (req, res) => {
  db.Subject.create(req.body)
  .then( data => {
    res.redirect('/subjects')
  })
})

router.get('/edit/:id', (req, res) => {
  let id = req.params.id
  db.Subject.findById(id)
  .then( data => {
    res.render('edit_subject', {header: 'Edit Subject Page', data_subject : data})
    console.log(`-------------------------- ${data.id}`);
  })
})

router.post('/edit/:id', (req, res) => {
  let id =  req.params.id
  let data = req.body
  db.Subject.update({data}, {
    where: {id:id}
  })
  .then( data =>{
    res.redirect('/subjects')
  })
  .catch( err => {
    console.log(err);
  })
})

router.get('/delete/:id', (req, res) => {
  let id = req.params.id
  db.Subject.destroy({
    where: {id:id}
  })
  .then( () => {
    res.redirect('/subjects');
  })
  .catch( err => {
    console.log(err);
  })
})





module.exports = router;
