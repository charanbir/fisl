    var express = require('express'),
    router = express.Router();
     
    router.use("/product", require("../controllers/product.api"));
     
    module.exports = router;
