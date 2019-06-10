var express = require('express');
const sequelize = require('sequelize');
var router = express.Router();
var kostModel = require('../models/kost')
/* GET home page. */
var price;
var distance;
var facilities;

function al(criteria1, criteria2, criteria3) {
  var a1 = criteria1 / criteria1;
  var a2 = criteria1 / criteria2;
  var a3 = criteria1 / criteria3;

  console.log(a1, a2, a3)

  var b1 = criteria2 / criteria1;
  var b2 = criteria2 / criteria2;
  var b3 = criteria2 / criteria3;

  console.log(b1, b2, b3)

  var c1 = criteria3 / criteria1;
  var c2 = criteria3 / criteria2;
  var c3 = criteria3 / criteria3;

  console.log(c1, c2, c3)

  var sum1 = a1 + b1 + c1;
  var sum2 = a2 + b2 + c2;
  var sum3 = a3 + b3 + c3;

  console.log(sum1, sum2, sum3)

  var suma1 = a1 / sum1;
  var sumb1 = b1 / sum1;
  var sumc1 = c1 / sum1;

  var suma2 = a2 / sum2;
  var sumb2 = b2 / sum2;
  var sumc2 = c2 / sum2;

  var suma3 = a3 / sum3;
  var sumb3 = b3 / sum3;
  var sumc3 = c3 / sum3;

  var ev1 = suma1 + suma2 + suma3;
  var ev2 = sumb1 + sumb2 + sumb3;
  var ev3 = sumc1 + sumc2 + sumc3;

  var sumev1 = ev1 / 3;
  var sumev2 = ev2 / 3;
  var sumev3 = ev3 / 3;

  // console.log(sumev1, sumev2, sumev3)
  var p = [sumev1, sumev2, sumev3]
  return p;
}

router.get('/', async function (req, res, next) {
  try {
    // var kostt = await kostModel.findAll({
    //   attributes: {
    //     include: [
    //       [sequelize.fn('COUNT', sequelize.col('id')), 'total_kost']
    //     ]
    //   }
    // });
    var kost = await kostModel.findOne({
      where: {
        id: 1
      }
    });
    var kost2 = await kostModel.findOne({
      where: {
        id: 2
      }
    });
    var kost3 = await kostModel.findOne({
      where: {
        id: 3
      }
    });
    // console.log(kost)
    // console.log(kost2)
    // console.log(kost3)

    price = al(kost.price, kost2.price, kost3.price);
    distance = al(kost.distance, kost2.distance, kost3.distance)
    facilities = al(kost.facilities, kost2.facilities, kost3.facilities)
    console.log(price)
    console.log(distance)
    console.log(facilities)
    return res.send(price)
  } catch (error) {
    console.log(error);
  }
});



router.post('/lala', function (req, res, next) {
  var criteria1 = req.body.price;
  var criteria2 = req.body.distance;
  var criteria3 = req.body.facilities;

  // var criteria1 = 2;
  // var criteria2 = 3;
  // var criteria3 = 5;

  var criteria = al(criteria1, criteria2, criteria3);

  var ev1 = (criteria[0]*price[0]) + (criteria[1]*distance[0]) + (criteria[2]*facilities[0]);
  var ev2 = (criteria[0]*price[1]) + (criteria[1]*distance[1]) + (criteria[2]*facilities[1]);
  var ev3 = (criteria[0]*price[2]) + (criteria[1]*distance[2]) + (criteria[2]*facilities[2]);

  if(ev1>ev2 && ev1>ev3){
    console.log("hasil alternatif 1", ev1)
  }
  if(ev2>ev1 && ev2>ev3){
    console.log("hasil alternatif 2", ev2)
  }
  if(ev3>ev1 && ev3>ev2){
    console.log("hasil alternatif 3", ev3)
  }
  console.log('hasil', ev1, ev2, ev3)
  return res.redirect('/')
});

router.get('/lala', function(req, res){
  return res.render('pic');

})

module.exports = router;