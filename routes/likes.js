var express = require('express');
var like = express.Router();	
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var myEvents=require('./myEvents.js');



var urlencodedParser = bodyParser.urlencoded({ extended: false })


like.post('/:eventN',function(req,res){
     
var conn=mongoose.connect('mongodb://localhost/houseServices');   

var provider=require('./providerSchema.js');

var eventN=req.params.eventN;

   	provider.update({eventName:eventN},{$inc:{likes:1}},
          function(err){
            if(err){
        	   console.log(err)
            }

        else{
        	res.send("<h1>record updated succesfully</h1>"+
                   "<a href='javascript:history.back()''>Go Back</a>" 
            );
        	mongoose.disconnect();
        }

   	});


});

	
module.exports = like;
