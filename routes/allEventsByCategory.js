fs = require('fs');
var express = require('express');
var allEventsByCategory = express.Router();
var mongoose=require('mongoose');




allEventsByCategory.get('/',function(req,res){
      res.send("great");    
            
        });

module.exports=allEventsByCategory;