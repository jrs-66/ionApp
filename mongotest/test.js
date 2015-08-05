var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://Jamess-MacBook-Pro.local:27000/menu';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});
