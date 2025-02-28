var conn = require('./../inc/db');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  conn.query(`
  SELECT * FROM tb_menus ORDER BY title
    `, (err, results) => {

    if(err){
      console.log(err);
    }
    
    res.render('index', { 
      title: 'Sensational Reustaurant!', 
      menus: results
    
    
    });


    });

});

router.get('/contacts', function(req, res, next) {
  res.render('contacts', {
    title: 'Contact Us',
    background: 'images/img_bg_3.jpg',
    h1: 'diga oi'
  });
});

router.get('/menus', function(req, res, next) {
  res.render('menus', {
    title: 'Our Menus',
     background: 'images/img_bg_1.jpg',
    h1: 'saboreie nosso main menu'
  });
});

router.get('/reservations', function(req, res, next) {
  res.render('reservations', {
    title: 'Make a Reservation',
     background: 'images/img_bg_2.jpg',
    h1: 'reserve sua mesa main'
  });
});

router.get('/services', function(req, res, next) {
  res.render('services', {
    title: 'Our Services',
     background: 'images/img_bg_1.jpg',
    h1: 'q prazer obg'
  });
});

module.exports = router;
