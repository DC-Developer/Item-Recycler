var express = require("express");
var connection = require("../config/connection.js");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var recycle = require("../models/recycler.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  recycle.all(function(data) {
    var hbsObject = {
      items: data
    };
    console.log(hbsObject);
    res.render("index", { recycle: hbsObject.items});
  });
});

router.post("/api/items", function(req, res) {
    recycle.create([
    "item"
  ], [
    req.body.item
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/items/:id", function(req, res) {
    //could not for the life of me code an orm method for this
    connection.query("UPDATE recycle SET recycled = true WHERE id = ?", [req.params.id], function(err, result) {
        if (err) {
          
          return res.status(500).end();
        } else if (result.affectedRows == 0) {
          
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
  });

router.delete("/totrash/:id", function(req, res){
//was having trouble using the delete method from orm
    connection.query("DELETE FROM recycle WHERE id = ?", [req.params.id], function(err, result) {
        if (err) {
          
          return res.status(500).end();
        } else if (result.affectedRows == 0) {
          
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });

});

// Export routes for server.js to use.
module.exports = router;
