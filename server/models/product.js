    var mongoose = require("mongoose"),
     Schema = mongoose.Schema,
     objectId = mongoose.Schema.ObjectId;
     
    var productSchema = new Schema({
     _id: { type: objectId, auto: true },
     code: { type: String, required: true },
     desc: { type: String, required: true },
     country : { type: String, required: true }
     }, {
     versionKey: false
    });
     
    var product = mongoose.model('products', productSchema);
     
    module.exports = product;

    
    
