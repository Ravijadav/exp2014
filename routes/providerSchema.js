var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var providerSchema = new Schema({
   eventName:String,
   eventDesc:String,
   date:String,
   time:String,
   providerName:String,
   providerMobileno:String,
   providerSite:String,
   category:String,
   subCategory:String,
   location:String,
   city:String,
   likes:Number,
   comments:[{
      user:String,
      comment:String
   }]
   
});
module.exports = mongoose.model('provider',providerSchema);          
