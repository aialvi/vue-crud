var express = require('express');
var app = express();
var categoryRoutes = express.Router();

// Require Category model in our routes module
var Category = require('../models/Category');

// Defined store route
categoryRoutes.route('/add').post(function (req, res) {
  var category = new Category(req.body);
      category.save()
    .then(category => {
        
    res.status(200).json({'category': 'Category added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
categoryRoutes.route('/').get(function (req, res) {
  Category.find(function (err, categories){
    if(err){
      console.log(err);
    }
    else {
      res.json(categories);
      console.log(categories);
    }
  });
});

// Defined edit route
categoryRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Category.findById(id, function (err, category){
      res.json(category);
  });
});

//  Defined update route
categoryRoutes.route('/update/:id').post(function (req, res) {
  Category.findById(req.params.id, function(err, category) {
    if (!category)
      return next(new Error('Could not load Document'));
    else {
      category.name = req.body.name;
      category.category = req.body.category;

      category.save().then(category => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
categoryRoutes.route('/delete/:id').get(function (req, res) {
  Category.findByIdAndRemove({_id: req.params.id}, function(err, category){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = categoryRoutes;