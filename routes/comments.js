var express = require('express');
var comment = express.Router();	
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var myEvents=require('./myEvents.js');



var urlencodedParser = bodyParser.urlencoded({ extended: false })


comment.post('/:eventN/:user',function(req,res){
     
var conn=mongoose.connect('mongodb://localhost/houseServices');   

var provider=require('./providerSchema.js');

var eventN=req.params.eventN;
var user=req.params.user;
var comment=req.param('textComment');

   	provider.update({eventName:eventN},{$addToSet:{comments:{"user":user,"comment":comment}}},
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

	
module.exports = comment;
