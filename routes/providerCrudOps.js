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
     
    // console.log(eventDetail);
     
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
          "               <br><br> <font size='5' class='text-success'>Event Name is:</font> <font id='eventName' size='5' class='text-info'></font> " +
          "               <br><font size='5' class='text-success'>Discription :</font> <font id='eventDesc' size='5' class='text-info'></font><br>  " +
          "               <font size='5' class='text-success'>Date:</font> <font id='date' size='5' class='text-info'></font>" +
          "               <br><font size='5' class='text-success'>Organizer Name  :</font> <font id='providerName' size='5' class='text-info'>" +
          "               <br></font> <br> <font size='5' class='text-success'>Organizer MobileNo:</font> <font id='providerMobileno' size='5' class='text-info'></font>" +
          "               <br> <font size='5' class='text-success'>Organizer Web  :</font> <font id='providerSite' size='5' class='text-info'></font>" +
          "              </div>" +
          
          "         </div" +


          "         <div class='col-md-4' style='background-color:white;'> " +
          "             <div class='row'> " +
          "               <h1 class='text-info' ></h1>" +
          "             </div> " +
          "         </div" +

          "     </div" +         

          "      <br><br>"+  
          "      <div class='col-md-12' style='background-color:white;' align='center' > " +        
          "           <div class='row' align='center'>"+  
          "               <br><br><button class='btn btn-info' id='like'>Find this Event Interesting</button>" +
          "           </div>" +
          "      </div" +
          
          
          "       <br><br>"+      
          "      <div class='col-md-12' style='background-color:white;' > " +
          "           <div class='row'>" +
          "       <br><br>"+
          "               <textarea class='form-control' rows=2 id='textComment' name='textComment' placeholder='What you think about the Event.'></textarea>" +
          "           </div> " +
          "      </div" +

          "       <br><br>"+        
          "      <div class='col-md-12' style='background-color:white;' align='center'>" +
          "         <div class='row' align='center'>"+
          "               <br><br><button class='btn btn-info' id='post'>Post Comment</button>"+
            "          </div>"+
          "      </div>"+
          "      <div class='col-md-12' style='background-color:white;' > " +      
          "       <h4 id='addComments'><b>What others think about this event:</b></h4>"+
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
       $('#providerSchemaite').text(eventDetail[0].providerSite);
      $('#form_id').attr({"action":"http://127.0.0.1:3000/providers/comments/"+eventDetail[0].eventName+"/"+user,
                            "method":"post"});
       

               

       var count=0;
        eventDetail[0].comments.forEach(function(elem,index,array){
          var ids="id"+count;
          var commentIds="comments"+count;
          console.log("ids is:"+ids);
          $("#addComments").append("<div class='panel-group' id='accordion'>"+
          "        <div class='panel panel-default'>"+
          "          <div class='panel-heading'>"+
          "            <h4 class='panel-title'>"+
          "            <a data-toggle='collapse' data-parent='#accordion' id='"+ids+"' href='#collapse1'><b>elem.user</b></a>"+
          "            </h4>"+
          "          </div>"+
          "          <div id='collapse1' class='panel-collapse collapse in'>"+
          "            <div class='panel-body' id='"+commentIds+"'>It was awesome.</div>"+
          "          </div>"+
          "        </div>"+
          "       </div>")
      
                  count++;
                 // console.log(elem.user)
                  //console.log("count is:"+count++)
                  $("#"+ids).text(elem.user);
                  $("#"+commentIds).text(elem.comment);
                  //$("#user1").text(elem.user);
                  //$("#comment1").text(elem.comment);
                //  console.log(elem.comment)
        
        })

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
