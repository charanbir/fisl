var mongoose = require('mongoose');
var uri = "mongodb://fisluser:fislpassword@cluster0-shard-00-00-cj6sr.mongodb.net:27017,cluster0-shard-00-01-cj6sr.mongodb.net:27017,cluster0-shard-00-02-cj6sr.mongodb.net:27017/fisl?replicaSet=Cluster0-shard-0";

var connection = mongoose.connect(uri, function(err, db){});

module.exports = connection;
