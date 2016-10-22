var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Favorites = require('../models/favorites');
var Dish = require('../models/dishes');

var favoriteRouter = express.Router();
favoriteRouter.use(bodyParser.json());

var Verify = require('./verify');

favoriteRouter.route('/')
    .all(Verify.verifyOrdinaryUser)
    .get(function(req,res,next){
        Favorites.find({})
            .populate('postedBy')
            .populate('dishes')
            .exec(function (err, favorites) {
                if (err) throw err;
                res.json(favorites);
            });
    })

    .post(function(req, res, next){
        Favorites.find({'postedBy': req.decoded._doc._id})
            .exec(function (err, favorites) {
                if (err) throw err;
                req.body.postedBy = req.decoded._doc._id;

                if (favorites.length) {
                    var favoriteAlreadyExist = false;
                    if (favorites[0].dishes.length) {
                        for (var i = (favorites[0].dishes.length - 1); i >= 0; i--) {
                            favoriteAlreadyExist = favorites[0].dishes[i] == req.body._id;
                            if (favoriteAlreadyExist) break;
                        }
                    }
                    if (!favoriteAlreadyExist) {
                        favorites[0].dishes.push(req.body._id);
                        favorites[0].save(function (err, favorite) {
                            if (err) throw err;
                            console.log('Ups - we have an error!');
                            res.json(favorite);
                        });
                    } else {
                        console.log('Already exists!');
                        res.json(favorites);
                    }

                } else {

                    Favorites.create({postedBy: req.body.postedBy}, function (err, favorite) {
                        if (err) throw err;
                        favorite.dishes.push(req.body._id);
                        favorite.save(function (err, favorite) {
                            if (err) throw err;
                            console.log('Something is up!');
                            res.json(favorite);
                        });
                    })
                }
            });
    })

    .delete(function(req, res, next){
       Favorites.remove({'postedBy': req.decoded._doc._id}, function (err, resp) {
           if (err) throw err;
           res.json(resp);
       });
    });

favoriteRouter.route('/:dishId')
    .all(Verify.verifyOrdinaryUser)
    .delete(function (req, res, next) {
        Favorites.find({'postedBy': req.decoded._doc._id}, function (err, favorites) {
            if (err) return err;
            var favorite = favorites ? favorites[0] : null;

            if (favorite) {
                for (var i = (favorite.dishes.length - 1); i >= 0; i--) {
                    if (favorite.dishes[i] == req.params.dishId) {
                        favorite.dishes.remove(req.params.dishId);
                    }
                }
                favorite.save(function (err, favorite) {
                    if (err) throw err;
                    console.log('Save favorite.');
                    res.json(favorite);
                });
            } else {
                console.log('No favourites found!');
                res.json(favorite);
            }

        });
    });
module.exports = favoriteRouter;