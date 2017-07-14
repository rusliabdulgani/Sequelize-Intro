const express = require('express');
const db = require('../models');

var router = express.Router();

router.get('/', (req, res) => {
  db.Subject.findAll({
    include: [db.Teacher]
  })
  .then( data => {
      res.render('subjects', {header: 'Subject Page', data_subject: data})
      console.log(`--------------------- ${data[0].Teachers[0].first_name}`);
    })
})






module.exports = router;
