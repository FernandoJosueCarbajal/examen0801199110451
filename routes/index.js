var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/examen', function(req,res,next){
  var examen = [
    {
      "Nombre":"Fernando Josue Carbajal pavon",
      "Identidad": "0801199110451",
      "Correo": "fernandocarbajal2010@hotmail.com",
    }];
  res.json(examen);

router.post('/suma',function(req,res,next){
    var entero1 = 2
    var entero2 = 3
    var suma = entero1 +entero2
    res.render('mensaje',suma);
    });

module.exports = router;
