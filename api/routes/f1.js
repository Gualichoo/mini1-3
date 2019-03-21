const express = require ('express');
const router = express.Router();
const mongoose = require('mongoose');
const Transactions = require ('../models/transactions');




router.get("/:transactionId", (req, res, next) =>{
  const id = req.params.transactionId;
  Transactions.findById(id)
  .exec()
  .then(doc => {
    console.log(doc);
    if (doc) {
      res.status(200).json(doc);
    } else {
      res.status(404).json({
        message: "invalid entry, that id does not exist"
      })
    }
  })
  .catch(err => {
    console.log (err)
    res.status(500).json({error:err});
  });


});

//Same as before but for post requests
router.post('/', (req, res, next) => {
  const transaction = new Transactions ({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    line1: req.body.line1,
    line2: req.body.line2,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    phonenumber: req.body.phonenumber,
    cardnumber: req.body.cardnumber,
    expirydate: req.body.expirydate,
    cvv: req.body.cvv,
    billingzipcode: req.body.billingzipcode

  });
  transaction
  .save()
  .then(result => {
    console.log(result);
    res.status(200).json({
      message: 'Transaction completed successfuly',
      transaction: transaction
    });
  })
  .catch (err => {
    console.log(err)
    res.status(500).json({
      error: err
    })
  });

});

router.get("/", (req, res, next) => {
  Transactions.find()
  .exec()
  .then(docs => {
    console.log(docs);
    res.status(200).json(docs);
  })
  .catch (err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  })
})


module.exports = router;