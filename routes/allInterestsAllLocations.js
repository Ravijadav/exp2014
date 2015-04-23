fs = require('fs');
var express = require('express');
var updateInterest = express.Router();
var mongoose=require('mongoose');


updateInterest.get('/',function(req,res){
    fs.readFile('./html/updateInterest.html', function (err, data) {
      if(err) {
      console.log(err);}
      
      else{
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
      }
});
});

updateInterest.post('/',function(req,res){
    var user=req.param('usr');
    var interest=req.param('interest[]');

    console.log(interest[0]);

    var consumer=require('./consumerSchema.js');

    mongoose.connect('mongodb://localhost/houseServices',function(err){
      if(err){
        console.log(err);
      }
    });

    
          consumer.update({userName:user},{$set:{interestCategory1:interest[0],interestCategory2:interest[1],interestCategory3:interest[2]}},function(err,doc){
            if(err){
                console.log(err);       
            }
            else{
              mongoose.disconnect();
              var link="http://localhost:3000/myEvents/"+user;
              res.send("<h3>Interest updated succesfully</h3>");
              
            }
          })
        
            
        });

module.exports=updateInterest;