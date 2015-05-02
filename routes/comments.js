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
var operation=req.param('event');
//console.log("button is:"+button);

if(operation=="post")
    {
      provider.update({eventName:eventN},{$addToSet:{comments:{"user":user,"comment":comment}}},
          function(err){
            if(err){
        	   console.log(err)
            }

        else{
        	res.redirect("javascript:history.back()");
        	mongoose.disconnect(function(err){if(err){console.log(err)}});
        }

   	});

}

else if(operation=="like"){

  provider.find({eventName:eventN})
          .select('eventName likes likesDetails')
          .exec(function(err,eventDetails){

              var index=eventDetails[0].likesDetails.indexOf(user);
                if(index>=0){
                  res.send("<h1>OOPS!You have already liked the Event.</h1>"+
                               "<a href='javascript:history.back()''>Go To Previous Page</a>"); 
                  mongoose.disconnect(function(err){
                                if(err){
                                  console.log(err);
                                }
                              });
                }

                else{
                  provider.update({eventName:eventN},{$inc:{likes:1},$push:{likesDetails:user}},function(err){
                        if(err){
                         console.log(err)}
                         
                         else{
                              mongoose.disconnect(function(err){
                                if(err){
                                  console.log(err);
                                }
                              });
                              res.redirect("javascript:history.back()");
                              
                          }
                      });
                    }
              })
        }


else if(operation=="unlike"){
  provider.update({eventName:eventN},{$inc:{unlikes:1}},
          function(err){
            if(err){
             console.log(err)
            }

        else{
            res.redirect("javascript:history.back()");
  
          mongoose.disconnect(function(err){
                                if(err){
                                  console.log(err);
                                }
                              });
        }

    });
}
});

	
module.exports = comment;
