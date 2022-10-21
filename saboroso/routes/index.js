var conn = require('./../inc/db')
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  conn.query(`
    SELECT * FROM tb_menus ORDER BY title
  `, (err, results)=>{

    if(err){
      console.log(err);
    }

    res.render('index', { 
      title: 'Restaurante Saboroso!',
      menus: results 
    });

  });
  
});

//rota para a pagina dos contatos
router.get('/contacts', function(req, res, next){

  res.render('contacts',{
    title: 'Contatos - Restaurante Saboroso!',
    background:'images/img_bg_3.jpg',
    h1:'Diga um oi!'
  });

});

//rota para a pagina dos menus
router.get('/menus', function(req, res, next){

  res.render('menus',{
    title: 'Menus - Restaurante Saboroso!',
    background:'images/img_bg_1.jpg',
    h1:'Saboreie nosso menu!'
  });

});

//rota para a pagina das reservas
router.get('/reservations', function(req, res, next){

  res.render('reservations',{
    title: 'Reservas - Restaurante Saboroso!',
    background:'images/img_bg_2.jpg',
    h1:'Reserve uma Mesa!'
  });

});

//rota para a pagina dos serviços
router.get('/services', function(req, res, next){

  res.render('services',{
    title: 'Serviços - Restaurante Saboroso!',
    background:'images/img_bg_1.jpg',
    h1:'É um prazer poder servir!'
  });

});

module.exports = router;
