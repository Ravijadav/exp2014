var  express = require('express');
var searchEvents = express.Router();	
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var cheerio = require('cheerio');



var urlencodedParser = bodyParser.urlencoded({ extended: false })



searchEvents.get('/:interest/:user',function(req,res){
    

var conn=mongoose.connect('mongodb://localhost/houseServices');   
var provider=require('./providerSchema.js');
var interest=req.params.interest;
var user=req.params.user;
var pattern=req.param('pattern');


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
          
          "<body>"+
          " <div class='container'>"+
          "     <br>"+  
          "    <div class='row'>"+
          "     <div >"+
          "       <h3 id='all' class='text-success'></h3"+
          "     </div>"+

          "    </div>"+
          
          "     <br>"+  
          "  <div>"+
          "    <table class='table' >"+
          "        <thead>"+
          "            <tr>"+
          "              <th>EVENT NAME</th>"+
          "              <th>LOCATION</th>"+
          "              <th>DATE</th>"+
          "              <th>TIME</th>"+
          "            </tr>"+
          "        </thead>"+
          "        <tbody id='rows'>"+
          
          "        </tbody>"+
          "    </table>"+
          "</div>"+
          "     <br>"+
          
          "     </div>"+
        "</body>"+
      "</html>");

    var searchPattern="/"+pattern+"/"+"i";

    
    
    var re = new RegExp(pattern, 'i');


   	provider
        .find().or([{ 'eventName': { $regex: re }}, { 'eventDesc': { $regex: re }}])
        .select('eventName eventDesc location date time likes')
        .exec(function(err,events){  
          if(err){console.log(err)}
          mongoose.disconnect(function(err){if(err){console.log(err)}});
        
        
        var count=0;
        events.forEach(function(elem,index,array){
        var name="name"+count;
        var loc="loc"+count;
        var date="date"+count;
        var time="time"+count;
        var link="link"+count;
  
          $("#rows").append("<tr >"+
          "                 <td id='"+name+"'><a href='www.google.com' id='"+link+"'></a></td>"+
          "                 <td id='"+loc+"'>john@example.com</td>"+
          "                 <td id='"+date+"'>john@example.com</td>"+
          "                 <td id='"+time+"'>john@example.com</td>"+
          "                 </tr>");


        
        $("#"+link).text(elem.eventName);
        $("#"+link).attr({"href":"http://localhost:3000/providers/"+elem.eventName+"/"+user});
        $("#"+loc).text(elem.location);
        $("#"+date).text(elem.date);
        $("#"+time).text(elem.time);

        count++;
      });  

        $("#all").text(user+" below are happenings in "+interest+":");
        res.send(200,$.html());  
});
});
	
module.exports = searchEvents;
