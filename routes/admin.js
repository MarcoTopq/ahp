var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  return res.render('login');
});

router.post('/', function (req, res, next) {
  var kost = new kostModel({
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    phone: req.body.phone,
    image: req.body.image,
    price: req.body.price,
    disaster_prone: req.body.disaster_prone,
    facilities: req.body.facilities,
  });
  try {
    kost.save();
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
