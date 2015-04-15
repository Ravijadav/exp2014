var express = require('express');
var routerProvider = express.Router();	
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var autoIncrement=require('mongoose-auto-increment');
var cheerio = require('cheerio');


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

var urlencodedParser = bodyParser.urlencoded({ extended: false })


routerProvider.get('/:eventName/:user',function(req,res){
mongoose.connect('mongodb://localhost/houseServices');


var provider=require('./providerSchema.js');

var eventName=req.params.eventName;
var user=req.params.user;

console.log(eventName);
	
	
provider.find({eventName:eventName},function(err,eventDetail){

     mongoose.disconnect(function(err){if(err){console.log(err)}
     
     console.log(eventDetail);
     
    	 $ = cheerio.load("<!DOCTYPE html> " +
          "<html lang='en'>" +

          "<head> " +
          " <title>EventDetails</title> " +
          " <meta charset='utf-8'>" +
          " <meta name='viewport' content='width=device-width, initial-scale=1'> " +
          " <link rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css'>" +
          " <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script> " +
          " <script src='http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js'></script> " +
          "<meta http-equiv='Content-Type' content='application/json'>"+
          "</head>" +

          " <body> " +
          "  <form id='form_id'>"+ 
          "   <div class='container' style='background-color:white;'> " +
          
          "     <div class='col-md-12' style='background-color:white;'> " +

          "         <div class='col-md-8' style='background-color:white;'> " +
          "             <div class='row'> " +
          "               <h1 class='text-info' id='interest'>" +
          "             </div> " +
         
          "             <div class='row'>" +
          "               <br><br> <font size='6' class='text-success'>Event Name is:</font> <font id='eventName' size='6' class='text-info'></font> " +
          "               <br><font size='6' class='text-success'>Discription :</font> <font id='eventDesc' size='6' class='text-info'></font><br>  " +
          "               <font size='6' class='text-success'>Date:</font> <font id='date' size='6' class='text-info'></font>" +
          "               <br><font size='6' class='text-success'>Organizer Name  :</font> <font id='providerName' size='6' class='text-info'>" +
          "               <br></font> <br> <font size='6' class='text-success'>Organizer MobileNo:</font> <font id='providerMobileno' size='6' class='text-info'></font>" +
          "               <br> <font size='6' class='text-success'>Organizer Web  :</font> <font id='providerSite' size='6' class='text-info'></font>" +
          "              </div>" +
          
          "         </div" +


          "         <div class='col-md-4' style='background-color:white;'> " +
          "             <div class='row'> " +
          "               <h1 class='text-info' >this section for comment</h1>" +
          "             </div> " +
          "         </div" +

          "     </div" +         

          "      <br><br>"+  
          "      <div class='col-md-12' style='background-color:white;' align='center' > " +        
          "           <div class='row' align='center'>"+  
          "               <br><br><input type='button' class='btn btn-info' value='Find this event Interesting'> " +
          "           </div>" +
          "      </div" +


          "      <div class='col-md-12' style='background-color:white;' > " +
          "           <div class='row'>" +
          "               <br><br><br><label for='comment'>Comment:</label> " +
          "               <textarea class='form-control' rows=4 id='textComment' name='textComment'></textarea>" +
          "           </div> " +
          "      </div" +


          "      <div class='col-md-12' style='background-color:white;' align='center'>" +
          "         <div class='row' align='center'>"+
          "               <br>  <input type='submit' class='btn btn-info' value='Post Comment'> " +
          "          </div>"+
          "      </div>"+


          "  </div>" +
          " </form>"+
        "</body> " +
      "</html>");
       

       $('#interest').text(eventDetail[0].category);
       $('#eventName').text(eventDetail[0].eventName);
       $('#eventDesc').text(eventDetail[0].eventDesc);
       $('#date').text(eventDetail[0].date);
       $('#providerName').text(eventDetail[0].providerName);
       $('#providerMobileno').text(eventDetail[0].providerMobileno);
       $('#providerSite').text(eventDetail[0].providerSite);
       $('#form_id').attr({"action":"http://127.0.0.1:3000/providers/comments/"+eventDetail[0].eventName+"/"+user,
                            "method":"post"});
       

      // $('#comment').text(eventDetail[0].eventName);

       

    
      res.send(200,$.html());
     
                                                                                     
                                                                                       })
});

});


routerProvider.get('/',function(req,res){

mongoose.connect('mongodb://localhost/houseServices');
var provider=require('./providerSchema.js');
	

provider.find({},function(err,stu){
     res.send(400,stu);
     console.dir(stu,mongoose.disconnect(function(err){
                                           if(err)
                                              {console.log("problem")}
                                           else
                                               {console.log("connection closed")}
                                            }))
});

});





routerProvider.post('/',function(req,res){
            
var conn=mongoose.connect('mongodb://localhost/houseServices');   
var provider=require('./providerSchema.js');


var newProvider = new provider(req.body);
console.log("user is:"+newProvider);

 newProvider.save(function(err){
	if(err){console.log("error while insertion") }
	else{console.log(req.body);
             res.send('data inserted succesfully');
             mongoose.disconnect(function(err){if(err){console.log('problem in connection close')}})}

});
});


routerProvider.delete('/:id',function(req,res){

mongoose.connect('mongodb://localhost/houseServices');   
var provider=require('./providerSchema.js');

var id=req.params.id;

provider.remove({_id:id},function(err,result){
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


module.exports = routerProvider;
