    var mongoose = require("mongoose"),
     Schema = mongoose.Schema,
     objectId = mongoose.Schema.ObjectId;
     
    var countrySchema = new Schema({
     _id: { type: objectId, auto: true },
     code: { type: String, required: true },
     desc: { type: String, required: true }
     }, {
     versionKey: false
    });
     
    var country = mongoose.model('country', countrySchema);
     
    module.exports = country;
