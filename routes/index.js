var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', {
    title: 'Proyecto 2DAW',
    enviado: req.query.enviado === '1'
  });
});

router.post('/contacto', function (req, res) {
  res.redirect('/?enviado=1#contacto');
});

module.exports = router;
