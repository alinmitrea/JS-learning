var express = require('express');
var bodyParser = require('body-parser');

var promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());

var Verify = require('./verify');

promotionRouter.route('/')
    .all(function(req,res,next) {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          next();
    })

    .get(Verify.verifyOrdinaryUser, function(req,res,next){
            res.end('Will send all the promotions to you!');
    })

    .post(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
        res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
    })

    .delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
            res.end('Deleting all promotions');
    });

promotionRouter.route('/:promotionId')
    .all(function(req,res,next) {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          next();
    })

    .get(Verify.verifyOrdinaryUser, function(req,res,next){
            res.end('Will send details of the promotion: ' + req.params.promotionId +' to you!');
    })

    .put(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
            res.write('Updating the promotion: ' + req.params.promotionId + '\n');
        res.end('Will update the promotion: ' + req.body.name +
                ' with details: ' + req.body.description);
    })

    .delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
            res.end('Deleting promotion: ' + req.params.promotionId);
    });

module.exports = promotionRouter;