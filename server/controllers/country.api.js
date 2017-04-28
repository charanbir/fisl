    var express = require("express"),
    router = express.Router(),
    country = require("../models/country.js");
     
    router.get("/", function(req, res) {
		//console.log("Jestem w get!!");
		country.find({}, function(err, data) {
			if (err) {
				res.send("err");
				return;
			}
			//console.log( data );
			res.send(data);
		});
    }).get("/:id", function(req, res) {
		var id = req.params.id;
		country.find({ _id: id }, function(err, data) {
			if (err) {
				res.send("err");
				return;
			}
			//console.log( data );
			res.send(data[0]);
		});
    }).post("/", function(req, res) {

		//console.log("Jestem w post!!");
	    var obj = req.body;
		//console.log( obj );
		var model = new country(obj);
		model.save(function(err) {
		if (err) {
			res.send("err");
			return;
		}
		res.send("created");
		});
    }).put("/:id", function(req, res) {
		var id = req.params.id;
		var obj = req.body;
     
		country.findByIdAndUpdate(id, {code: obj.code,  desc: obj.desc }, 
			function(err) {
				if (err) {
					res.send("err");
					return;
			}
			res.send("updated");
		});
    }).delete("/:id", function(req, res) {
		var id = req.params.id;
		country.findByIdAndRemove(id, function(err) {
		if (err) {
			res.send("err");
			return;
		}
		res.send("deleted");
		});
    }).purge("/", function(req, res) {
		country.remove({}, function(err, data) {
			if (err) {
				res.send("err");
				return;
			}
			res.send("delete_all");
		});
    });
     
    module.exports = router;
