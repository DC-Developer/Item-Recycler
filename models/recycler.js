var orm = require("../config/orm.js");

var recycle = {
  all: function(cb) {
    orm.all("recycle", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("recycle", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals,status, cb) {
    orm.update("recycle",objColVals, status, function(res) {
      cb(res);
    });
  },
  delete: function(objColVals, cb){
     orm.delete("recycle", objColVals, function(res){
        cb(res);

     }); 
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = recycle;