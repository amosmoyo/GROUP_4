const express = require('express');
const router = express.Router();
const passport = require('passport');
const stripe = require('stripe')('sk_test_9pbEUCW71C3TFSo2Zrn09tEU00cxyqOgtP');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/schema');
const control = require('../controls/controller');
const Pay =  require('../models/data');

router.post('/register', (req, res, next) => {
  let newUser = new User ({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });

  control.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, message: 'Failed to  user to the database, seems  user  exist'});
    } else {
      res.json({success: true, message: '_________________________________________________________________________________________________________________________________________________________________________________________________________________You have been registered to the database, you can now login'});
    }
  });
});

router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  control.getUserByEmail(email, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, message: 'User not found in the database, please try to register.............................................................................................................................................................................................................................................................................           go to register!'});
    }

    control.comparePassword(password, user.password, (err, passwordMatch) => {
      if(err) throw err;
      if(passwordMatch) {

        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 3600 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+ token,
          expiresIn: 3600,
          user: {
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            email: user.email
          }
        })
      } else {
        return res.json({success: false, message: 'You are using a wrong email or password, please enter valid details...............................................................................................................................................................................................................................................                                                                  ...            ...                  ... login again'});
      }
    });
  });
});

router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  const id = req.user._id;
  const firstname = req.user.firstname;
  const lastname = req.user.lastname;
  const username = req.user.username;
  const email = req.user.email;
  res.json({id, firstname, lastname, username, email});
});


router.post('/payme', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let data = new Pay ({
    id: req.body.id,
    amount: req.body.amount,
    date: req.body.date,
    creatorName: req.user.username,
    creatorId: req.user._id
  });

 console.log(data);

  stripe.customers.create({
    email: req.user.email,
    source: req.body.id
  }).then(customer => stripe.charges.create({
    amount: data.amount,
    description: 'Cromo electronic store',
    currency: 'usd',
    customer: customer.id
  })).then( (charge) => {
    data.save().then((document)=> {
      res.status(200).json({
        message: 'The record was successfully added to database',
        document: document
      })
    });
  })
})

router.get('/getdata', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let query = {creatorId: req.user._id}
  Pay.find(query, (err, docs) => {
    if(err) throw err;
    console.log(docs);
    res.json({docs:docs});
  }).sort({date: -1})
})

module.exports = router;
