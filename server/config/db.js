

    var mongoose = require('mongoose');
    var connection = mongoose.connect('mongodb://127.0.0.1/fisl');
     
    module.exports = connection;
