var express = require('express');
var comment = express.Router();	
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var myEvents=require('./myEvents.js');



var urlencodedParser = bodyParser.urlencoded({ extended: false })


comment.post('/:eventN/:user',function(req,res){
     
var conn=mongoose.connect('mongodb://clouddata-2.cloud1.2971.mongodbdns.com:27000,clouddata-1.cloud1.2971.mongodbdns.com:27000,clouddata-0.cloud1.2971.mongodbdns.com:27000/houseServices');   

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
        	res.redirect("http://project-939413137.ap-southeast-1.elb.amazonaws.com/providers/"+eventN+"/"+user);
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
                  res.send("<h1>OOPS!You have already liked the Event.</h1>");
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
                              res.redirect("http://project-939413137.ap-southeast-1.elb.amazonaws.com/providers/"+eventN+"/"+user);
                              
                          }
                      });
                    }
              })
        }


else if(operation=="unlike"){
  provider.find({eventName:eventN})
          .select('eventName unlikes unlikesDetails')
          .exec(function(err,eventDetails){

              var index=eventDetails[0].unlikesDetails.indexOf(user);
                if(index>=0){
                  res.send("<h1>OOPS!You have already unliked the Event.</h1>");
                  mongoose.disconnect(function(err){
                                if(err){
                                  console.log(err);
                                }
                              });
                }

                else{
                  provider.update({eventName:eventN},{$inc:{unlikes:1},$push:{unlikesDetails:user}},function(err){
                        if(err){
                         console.log(err)}
                         
                         else{
                              mongoose.disconnect(function(err){
                                if(err){
                                  console.log(err);
                                }
                              });
                              res.redirect("http://project-939413137.ap-southeast-1.elb.amazonaws.com/providers/"+eventN+"/"+user);
                              
                          }
                      });
                    }
              })
  
}
});

	
module.exports = comment;
