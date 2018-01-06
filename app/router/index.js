/*jshint esversion: 6*/

const express = require('express')
const router = express.Router()
const DB = require('../dbhandler').DBHandler;

/**
  TBD
*/
router.use('/cxf/rest-auth/WSSAccounts/Auth/ResetUsername', function(req, res, next) {
  res.set("X-Powered-By", "STW Fake Middleware")
  res.set("Content-Type", "application/json")
  if (req.method === "POST") {
    console.log(req);
    res.status(200)
  }
  next()
})

/**
  TBD
*/
router.use('/cxf/registration/WSSAccounts', function(req, res, next) {
  res.set("X-Powered-By", "STW Fake Middleware")
  res.set("Content-Type", "application/json")
    console.log("In wss accounts call");
  if (req.method === "POST") {
    console.log(req);
    res.status(200)
  }
  next()
})

/**
  Accounts Legal Entity
  lists associated accounts
*/
router.use('/cxf/registration/WSSAccounts/legal-entity', function(req, res, next) {
  res.set("X-Powered-By", "STW Fake Middleware")
  res.set("Content-Type", "application/json")
  console.log("In legal-entity call");
  if (req.method === "GET") {
    res.status(200)
    res.json(JSON.parse(DB.getAccounts()));
  }
  next()
})

/**
  Auth
  authenticates user
*/
router.use('/cxf/rest-auth/WSSAccounts/Auth', function(req, res, next) {
  res.set("X-Powered-By", "STW Fake Middleware")
  res.set("Content-Type", "application/json")
  if (req.method === "PUT") {
    if ((req.body.username == "stwuser") && (req.body.password == "Password1")) {
      res.status(200)
      res.json(DB.getLogin());
    }else{
      res.status(400);
    }
  }
  next()
})

/**
  Meters
  returns meters list
*/
router.use('/cxf/meter/Meters', function(req, res, next) {
  res.set("X-Powered-By", "STW Fake Middleware")
  res.set("Content-Type", "application/json")
  if (req.method === "GET") {
    res.status(200)
    res.json(JSON.stringify(DB.getMeters()))
  } else if (req.method === "POST") {
    res.status(400)
  }
  next()
})

module.exports = router;
