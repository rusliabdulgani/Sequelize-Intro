const express = require('express');
const db = require('../models');

var router = express.Router();

router.get('/', (req, res) => {
  db.Subject.findAll()
  .then( data => {
    res.render('subjects', {header: 'Subject Page', data_subjects: data})
  })
})



module.exports = router;
