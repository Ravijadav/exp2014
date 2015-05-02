fs = require('fs');
var express = require('express');
var updateInterest = express.Router();
var mongoose=require('mongoose');
var cheerio = require('cheerio');

updateInterest.get('/:user/:password/:location',function(req,res){
  var task=req.param("task");
  var user=req.params.user;
  var password=req.params.password;
  var location=req.params.location;

  console.log("task is:"+task);
  if(task=="updateInterest"){   

     $ = cheerio.load("<!DOCTYPE html>"+
      "<html lang='en'>"+ 
          
          "<head>"+ 
              "<title>Update Interest</title>"+
              "<meta charset='utf-8'>"+
              "<meta name='viewport' content='width=device-width, initial-scale=1'>"+
              "<link rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css'>"+
              "<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>"+ 
              "<script src='http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js'></script>"+ 
          "</head>"+ 
                      
          "<body>"+
              "<div class='container'>"+
                  "<form role='form' id='form_id'>"+
                      
                    "<input type='hidden' id='user' name='user' value='someValue'/>"+
                    "<input type='hidden' id='password' name='password' value='someValue'/>"+    
                    "<br><br>"+
                    "<br><br><br><h3 class='text-info'>Please select your interset:</h3>"+
                    
                    "<div class='checkbox'>"+
                         "<label><input type='checkbox' name='interest[]' value='music'><font size=5>Music</font></label>"+
                    "</div>"+
                    "<div class='checkbox'>"+
                        "<label><input type='checkbox' name='interest[]' value='sports'><font size=5>Sports</font></label>"+
                    "</div>"+
                    "<div class='checkbox'>"+
                        "<label><input type='checkbox' name='interest[]' value='food'><font size=5>Food</font></label>"+
                    "</div>"+
                    "<div class='checkbox'>"+
                        "<label><input type='checkbox' name='interest[]' value='education'><font size=5>Education</font></label>"+
                    "</div>"+
                    "<div class='checkbox'>"+
                        "<label><input type='checkbox' name='interest[]' value='socialservice'><font size=5>Social Service</font></label>"+
                    "</div>"+

                    "<br>"+  
                    "<div align='left'>"+
                      "<button onclick='myFunction()' name='updateInterest' value='updateInterest' type='submit' class='btn btn-info' >Submit</button>"+
                    "</div>"+

              "</form>"+
          "</div>"+
      "</body>"+
  "</html>");

      $("#form_id").attr({"action":"http://localhost:3000/allInterestsAllLocations","method":"post"});
      $("#user").val(user);
      $("#password").val(password);
      res.send(200,$.html());     
} 


else if(task=="eventsByCategory"){   

     $ = cheerio.load("<!DOCTYPE html>"+
          "<html lang='en'>"+ 
          
          "<head>"+ 
              "<title>Update Interest</title>"+
              "<meta charset='utf-8'>"+
              "<meta name='viewport' content='width=device-width, initial-scale=1'>"+
              "<link rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css'>"+
              "<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>"+ 
              "<script src='http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js'></script>"+ 
          "</head>"+ 
                      
          "<body>"+
              "<div class='container'>"+
                   "<form id='form_id' role='form' method='get'>"+
                      "<div class='form-group'>"+
                          "<label for='category'><h3 class='text-info'>Please select your Category:</h3></label>"+
                          "<br><br>"+
                          "<select id='interestCategory' class='form-control' name='category'>"+
                            "<option value='music'>Music</option>"+
                            "<option value='sports'>Sports</option>"+
                            "<option value='socialservice'>SocialService</option>"+
                            "<option value='food'>Food</option>"+
                            "<option value='education'>Education</option>"+ 
                          "</select>"+

                          "<div align='center'>"+
                                "<br><br><button type='submit' class='btn btn-info' >Submit</button>"+
                          "</div>"+
                      "</div>"+
                    "</form>"+
            "</div>+"+
      "</body>"+
  "</html>");

      
      $("#form_id").attr("action","http://localhost:3000/viewAllHappenings/"+user+"/"+consumerLocation);
      res.send(200,$.html());     
} 

else if(task=="eventsByLocation"){   

     $ = cheerio.load("<!DOCTYPE html>"+
          "<html lang='en'>"+ 
          
          "<head>"+ 
              "<title>Update Interest</title>"+
              "<meta charset='utf-8'>"+
              "<meta name='viewport' content='width=device-width, initial-scale=1'>"+
              "<link rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css'>"+
              "<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>"+ 
              "<script src='http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js'></script>"+ 
          "</head>"+ 
                      
          "<body>"+
              "<div class='container'>"+
                  "<form id='form_id' role='form' method='get'>"+
                    "<div class='form-group'>"+
                    
                        "<div class='row'>"+
                          "<div class='col-md-4'>"+
                              "<label for='category'><h3 class='text-info'>Please select your Category:</h3></label>"+
                              "<br><select class='form-control' name='category'>"+
                                "<option value='music'>Music</option>"+
                                "<option value='sports'>Sports</option>"+
                                "<option value='socialservice'>SocialService</option>"+
                                "<option value='food'>Food</option>"+
                                "<option value='education'>Education</option>"+
                              "</select>"+
                          "</div>"+

                
                          
                        "<div class='col-md-4'>"+
                              "<label for='category'><h3 class='text-info'>Please select your Region:</h3></label>"+
                                  "<br><select class='form-control' name='location' required>"+
                                       "<option value='Electronic city phase1'>Electronic city phase1</option>"+
                                       "<option value='Electronic city phase2'> Electronic city phase2 </option>"+
                                       "<option value='marathali'> Marathali </option>"+
                                       "<option value='kormangala'> Kormangala </option>"+
                                       "<option value='jpnagar> J P nagar </option>"+
                                   "</select>"+
                         "</div>"+
                         
                         "<div class='col-md-4'>"+
                         "</div>"+
                         "</div>"+

                         "<div class='row'>"+
                          "<div class='col-md-8' align='center'>"+
                                " <br><br><br><button type='submit' class='btn btn-info'>SUBMIT</button>"+
                          "</div>"+             
                          "</div>"+
                    "</div>"+
                  "</form>"+
            "</div>"+
      "</body>"+
  "</html>");

      
      $("#form_id").attr("action","http://localhost:3000/viewAllHappenings/"+user);
      res.send(200,$.html());     
} 

  
else{
  console.log("wrong choice given")
}
  });


updateInterest.post('/',function(req,res){
    var user=req.param('user');
    var password=req.param('password');
    var interest=req.param('interest[]');


    var consumer=require('./consumerSchema.js');

    mongoose.connect('mongodb://localhost/houseServices',function(err){
      if(err){
        console.log(err);
      } });


          consumer.update({userName:user},{$set:{interestCategory1:interest[0],interestCategory2:interest[1],interestCategory3:interest[2]}},function(err,doc){
            if(err){
                console.log(err);       
            }
            else{
             console.log(doc);        
              mongoose.disconnect();

              $ = cheerio.load("<!DOCTYPE html>"+
                            "<html lang='en'>"+ 
                              "<head>"+
                                  "<title>Interests Updated Succesfully</title>"+
                                  "<meta charset='utf-8'>"+
                                  "<meta name='viewport' content='width=device-width, initial-scale=1'>"+
                                  "<link rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css'>"+
                                  "<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>"+ 
                                  "<script src='http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js'></script>"+ 
                              "</head>"+ 
                      
                              "<body>"+
                                  "<div class='container'>"+
                                      "<br>"+        
                                      "<div class='col-md-6' align='left'>"+
                                          "<a id='home' href='https://www.google.com'><button class='btn btn-info'>Home</button></a>"+
                                      "</div>"+

                                      "<div class='col-md-6' align='left'>"+
                                          "<a id='logout' href='https://localhost:3000'><button class='btn btn-info'>Logout</button></a>"+
                                      "</div>"+

                                      "<br><br><h3 class='text-info'>Interests updated sucessfully.</h3>"+
                                  "</div>"+
                              "</body>"+
                            "</html>");

              $("#home").attr("href","http://127.0.0.1:3000/myEvents?uname="+user+"&pass="+password);
              res.send(200,$.html());      
                                  }
          }) });

module.exports=updateInterest;