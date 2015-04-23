var express = require('express');
var router = express.Router();	
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var myEvents=require('./myEvents.js');
var json2html = require('node-json2html');


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

var urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/:id',function(req,res){
mongoose.connect('mongodb://localhost/houseServices');


var customer=require('./consumerSchema.js');

var id=req.params.id;
console.log(id);
	

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

mongoose.connect('mongodb://localhost/houseServices');
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
     
var conn=mongoose.connect('mongodb://localhost/houseServices');   
var consumer=require('./consumerSchema.js');
var provider=require('./providerSchema.js');

var interest=req.param('interestCategory');
var subinterest=req.param('interestSubCategory');
console.log("interest is"+interest);

console.log("obj is:"+req.body);

var newConsumer = new consumer(req.body);
console.log("user is:"+newConsumer);

	
 newConsumer.save(function(err){
	if(err){console.log(err) }
	     else{
             console.log('data inserted succesfully');
              res.send("<h1>record updated succesfully</h1>"+
                        "<a href='http://localhost:3000'>Please login again</a>");
                	mongoose.disconnect(function(err){
                                           if(err)
                                              {console.log(err)}
                                           else
                                               {console.log("connection closed succesfully")}
                                            })
             }

});
});


router.delete('/:id',function(req,res){

mongoose.connect('mongodb://localhost/houseServices');   
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
