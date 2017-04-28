    var express = require('express'),
    router = express.Router();
     
    router.use("/product", require("../controllers/product.api"));
    router.use("/country", require("../controllers/country.api"));
     
    module.exports = router;
