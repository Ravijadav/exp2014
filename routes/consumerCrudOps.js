var express = require('express');
var router = express.Router();	
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var myEvents=require('./myEvents.js');
var json2html = require('node-json2html');


var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/:id',function(req,res){
    mongoose.connect('mongodb://clouddata-2.cloud1.2971.mongodbdns.com:27000,clouddata-1.cloud1.2971.mongodbdns.com:27000,clouddata-0.cloud1.2971.mongodbdns.com:27000/houseServices',function(err){
      if(err){
        console.log(err);
      }
  });


var customer=require('./consumerSchema.js');

var id=req.params.id;
//console.log(id);
	

customer.find({_id:id},function(err,stu){
     res.send(400,stu);
     console.dir(stu,mongoose.disconnect(function(err){
                                           if(err)
                                              {console.log("problem")}
                                           else
                                               {console.log("connection closed")}
                                            }))
});

});


router.get('/',function(req,res){

mongoose.connect('mongodb://clouddata-2.cloud1.2971.mongodbdns.com:27000,clouddata-1.cloud1.2971.mongodbdns.com:27000,clouddata-0.cloud1.2971.mongodbdns.com:27000/houseServices',function(err){
  if(err){
    console.log(err);
  }
});
var customer=require('./consumerSchema.js');
	

customer.find({},function(err,stu){
     res.send(400,stu);
     console.dir(stu,mongoose.disconnect(function(err){
                                           if(err)
                                              {console.log("problem")}
                                           else
                                               {console.log("connection closed")}
                                            }))
});

});





router.post('/',function(req,res){
     
var conn=mongoose.connect('mongodb://clouddata-2.cloud1.2971.mongodbdns.com:27000,clouddata-1.cloud1.2971.mongodbdns.com:27000,clouddata-0.cloud1.2971.mongodbdns.com:27000/houseServices',function(err){
  if(err){
    console.log(err);
  }
});

var consumer=require('./consumerSchema.js');
var provider=require('./providerSchema.js');



var fname=req.param('fname');
var lname=req.param('lname');
var userName=req.param('userName');
var password=req.param('password');
var email=req.param('email');
var interests=req.param('interests');

consumer.count({"userName":userName},function(err,count){
    
      
    mongoose.disconnect(function(err){if(err){console.log(err)}});
    if(count!=0){
          res.send("<h1>User name already exist.Please select deifferent USER NAME</h1>"+
                "<a href='http://project-939413137.ap-southeast-1.elb.amazonaws.com'>Please signin to avail Services</a>");
  }

    else{

        mongoose.connect('mongodb://clouddata-2.cloud1.2971.mongodbdns.com:27000,clouddata-1.cloud1.2971.mongodbdns.com:27000,clouddata-0.cloud1.2971.mongodbdns.com:27000/houseServices',function(err){
            if(err){
              console.log(err);
            }
          });
        var newConsumer = new consumer({"fname":fname,
                                "lname":lname,
                                "userName":userName,
                                "password":password,
                                "email":email,
                                "interestCategory1":interests[0],
                                "interestCategory2":interests[1],
                                "interestCategory3":interests[2],
                                "city":"Bangalore"
                              });

	
 newConsumer.save(function(err){
	if(err){console.log(err) }
	     else{
             console.log('data inserted succesfully');
              res.send("<h1>Congratulation! You have signup successfully.</h1>"+
                        "<a href='http://project-939413137.ap-southeast-1.elb.amazonaws.com'>Please login again</a>");
                	mongoose.disconnect(function(err){
                                           if(err)
                                              {console.log(err)}
                                           else
                                               {
                                                console.log("connection closed succesfully")
                                                }
                                            })
             }

});
}
});
});




router.delete('/:id',function(req,res){

mongoose.connect('mongodb://clouddata-2.cloud1.2971.mongodbdns.com:27000,clouddata-1.cloud1.2971.mongodbdns.com:27000,clouddata-0.cloud1.2971.mongodbdns.com:27000/houseServices');   
var customer=require('./customerSchema.js');

var id=req.params.id;

customer.remove({_id:id},function(err,result){
                                if(!err){
                                    console.log('deletion done succesfully')
                                    if(result===1)
                                    {res.send('deletion done succesfully')}
                                    else
                                     {res.send('No data is deleted')}
                                    mongoose.disconnect();
                                    }
                                    })


});


module.exports = router;
