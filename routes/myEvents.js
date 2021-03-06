var express = require('express');
var events = express.Router();	
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var cheerio = require('cheerio');

var urlencodedParser = bodyParser.urlencoded({ extended: false })


events.get('/',function(req,res){
mongoose.connect('mongodb://clouddata-2.cloud1.2971.mongodbdns.com:27000,clouddata-1.cloud1.2971.mongodbdns.com:27000,clouddata-0.cloud1.2971.mongodbdns.com:27000/houseServices',function(err){if(err){console.log('can not connect succesfully')}});

var user=req.param('uname');
var password=req.param('pass');
var nearestLocation='Electronic city phase2'

var provider=require('./providerSchema.js');
var consumer=require('./consumerSchema.js');

  consumer.count({userName:user},function(err,count){
 
          mongoose.disconnect(function(err){if(err){console.log(err)}});
    if(count==0){
          res.send("<h1>User does not exist</h1>"+
                "<a href='http://project-939413137.ap-southeast-1.elb.amazonaws.com'>Please signin to avail Services</a>");
  }


  else{
  
          $ = cheerio.load("<!DOCTYPE html>"
                  + "<html lang='en'> "
                  + "<head> <title>MyHappenings.com</title>"
                  + " <meta charset='utf-8'>"
                  + " <meta name='viewport' content='width=device-width, initial-scale=1'>"
                  + " <link rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css'> "
                  + "<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script> "
                  + "<script src='http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js'></script> "
                  + "</head>" 
                      
                  + "<body>"
                  +" <div class='container-fluid' style='background-color:navy'>"
                  + "  <div class='row'>"
                  
                  +"      <form id='allInterest'>"
                  + "        <div class='col-md-2' align='center'>"    
                  + "           <br><button name='task' value='updateInterest' type='submit' class='btn btn-primary'><b>UPDATE INTEREST</b></button>"
                  + "         </div>"

                  + "         <div class='col-md-2' align='center'>"    
                  + "           <br><button name='task' value='eventsByCategory' type='submit' class='btn btn-success'><b>EVENTS BY CATEGORY</b></button>" 
                  + "         </div>"

                  + "         <div class='col-md-2'>"    
                  + "           <br><button name='task' value='eventsByLocation' type='submit' class='btn btn-info'><b>EVENTS BY LOCATION</b></button>" 
                  + "         </div>"

                  + "     </form>"+

                  "      <div class='col-md-6' align='center'>"+
                  "        <br>"+
                  "       <form  action='http://project-939413137.ap-southeast-1.elb.amazonaws.com' enctype='application/x-www-form-urlencoded'>"+
                  "           <button name='searchEvents' type='submit' class='btn btn-danger' ><b>LOGOUT</button><b>" +
                  "       </form>"+
                  "       </div>"+

                  "     </div>"+
                  "     <div class='row'>"+
                  "         <div class='col-md-12'>"+
                  "           <h1></h1>"+
                  "         </div>"+                                    
                  "    </div>"+    
                  "   </div>"  

                  +" <div class='container-fluid' style='background-color:#ECECEA'>"  
                  + "  <div class='row'>"
                  + "       <div class='col-md-8'>"
                  + "           <h2 id='user' class='text-success'><b></b></h2>"
                  + "           <h3 id='location' class='text-info'></h3>"
                  +"        </div>"
                  +"    </div>"                      
                  +"  </div>"                        
                  +" </div>"                        

                  +" <div class='container-fluid' style='background-color:#7D1935'>"
                  //+ "  <div class='row'>"

                  + "   <div class='col-md-3' style='background-color:lightgray;'>"
                  + "     <h2 class='text-info' id='interest1'></h2> "
                  + "     <img id='image1' class='img-rounded' width='275' height='230'>"
                  + "     <a id='event1' href='http://www.w3schools.com'><h4 id='eventName1'></h4></a>"
                  + "     <a id='event2' href='http://www.w3schools.com'><h4 id='eventName2'></h4></a> "
                  + "     <a id='event3' href='http://www.w3schools.com'><h4 id='eventName3'></h4></a>"
                  + "      <br>"               
                  + "     <a id='allEvent1' href='http://www.w3schools.com'><h4 class='text-success'><b>all happenings</b></h4></a>"   
                  + "     <a id='nearEvent1' href='http://www.w3schools.com'><h4 class='text-info'><b>happenings in nearby locations</b></h4></a>"   
                  + "   </div>"
                  
                  +"    <div class='col-md-1' style='background-color:white;'>"
                  +"    </div>" 
                
                  +"    <div class='col-md-3' style='background-color:lightblue;'>"
                  + "     <h2 class='text-info' id='interest2'></h2><img id='image2' class='img-rounded' width='275' height='230'> "
                  + "     <a id='interest2Event1' href='http://www.w3schools.com'><h4 id='category2event1'></h4></a>"
                  + "     <a id='interest2Event2' href='http://www.w3schools.com'><h4 id='category2event2'></h4></a>"
                  + "     <a id='interest2Event3' href='http://www.w3schools.com'><h4 id='category2event3'></h4></a> "
                  + "     <br>"
                  + "     <a id='allEvent2' href='http://www.w3schools.com'><h4 class='text-success'><b>all happenings</b>"
                  + "     <a id='nearEvent2' href='http://www.w3schools.com'><h4 class='text-info'><b>happenings in nearby locations</b></h4></a>"
                  + "   </div>"
                  
                  + "   <div class='col-md-1' style='background-color:lavenderblush'> </div>"
                      
                      
                  + "   <div class='col-md-3' style='background-color:lightgreen;'>"
                  + "     <h2 class='text-info' id='interest3'></h2>"
                  + "     <img id='image3' class='img-rounded' width='275' height='230'>"
                  + "     <a id='interest3Event1' href='http://www.w3schools.com'>"
                  + "     <h4 id='category3event1'></h4></a> <a id='interest3Event2' href='http://www.w3schools.com'>"
                  + "     <h4 id='category3event2'></h4></a> <a id='interest3Event3' href='http://www.w3schools.com'>"
                  + "     <h4 id='category3event3'></h4></a>"
                  + "     <br>"
                  + "     <a id='allEvent3' href='http://www.w3schools.com'><h4 class='text-success'><b>all happenings</b></h4></a>"
                  + "     <a id='nearEvent3' href='http://www.w3schools.com'><h4 class='text-info'><b>happenings in nearby locations</b></h4></a>"   
                  + "  </div>"
                  + " </div> " 
                  + "   <br><br>"
                
                  + " </div>"

                  +"</body> </html> ");

consumerLocation='Electronic city phase1';
$("#user").text("Welcome "+user);
$("#allInterest").attr("action","http://project-939413137.ap-southeast-1.elb.amazonaws.com/allInterestsAllLocations/"+user+"/"+password+"/"+consumerLocation);
	
mongoose.connect('mongodb://clouddata-2.cloud1.2971.mongodbdns.com:27000,clouddata-1.cloud1.2971.mongodbdns.com:27000,clouddata-0.cloud1.2971.mongodbdns.com:27000/houseServices',function(err){if(err){console.log(err)}});
consumer.find({userName:user},function(err,interests){
 if(err){console.log(err)}

    if(password!=interests[0].password){
        res.send("<h1>OOPS!Password seems to be mismatched</h1>"+
                "<a href='http://project-939413137.ap-southeast-1.elb.amazonaws.com'>Please login again</a>");   
    }

    else{

    interest1=interests[0].interestCategory1;	
    interest2=interests[0].interestCategory2;
    interest3=interests[0].interestCategory3;
    
    
    

    	mongoose.disconnect(function(err){if(err){console.log(err)}});	
    	
    	mongoose.connect('mongodb://clouddata-2.cloud1.2971.mongodbdns.com:27000,clouddata-1.cloud1.2971.mongodbdns.com:27000,clouddata-0.cloud1.2971.mongodbdns.com:27000/houseServices',function(err){if(err){console.log(err)}});

      $("#location").text("Here are the events of your Interests in "+consumerLocation+":");
          
    provider
        .find({category:interest1,location:consumerLocation})
        .limit(3)
        .sort('-likes')
        .select('eventName category likes')
        .exec(function(err,providers1){
        	
              if(err){console.log(err)}
            	
              else {

                console.log("providers is:"+providers1);
        		    mongoose.disconnect(function(err){if(err){console.log(err)}});
        
        var link="http://project-939413137.ap-southeast-1.elb.amazonaws.com/providers/";	
        $("#interest1").text(providers1[0].category);
   			$("#eventName1").text(providers1[0].eventName+"("+providers1[0].likes+")");
   			$("#eventName2").text(providers1[1].eventName+"("+providers1[1].likes+")");
   			$("#eventName3").text(providers1[2].eventName+"("+providers1[1].likes+")");
   			$("#event1").attr("href",link+providers1[0].eventName+"/"+user);
   			$("#event2").attr("href",link+providers1[1].eventName+"/"+user);
   			$("#event3").attr("href",link+providers1[2].eventName+"/"+user);
        $("#allEvent1").attr("href","http://project-939413137.ap-southeast-1.elb.amazonaws.com/viewAllHappenings/"+interest1+"/"+user+"/"+consumerLocation);
        $("#nearEvent1").attr("href","http://project-939413137.ap-southeast-1.elb.amazonaws.com/viewAllHappenings/"+interest1+"/"+user+"/"+nearestLocation);
   			
   			if(providers1[0].category=='music'){
   				$("#image1").attr("src","http://icons.iconarchive.com/icons/wwalczyszyn/iwindows/512/Music-Library-icon.png");
   			}
   				
   			else if(providers1[0].category=='sports'){
   				$("#image1").attr("src","http://modmyi.com/attachments/forums/iphone-5-new-skins-themes-launches/674613d1406083072-lion-d-sport-activities-football-icon.png");
   			}
   			
   			else if(providers1[0].category=='food'){
   				$("#image1").attr("src","http://www2.psd100.com/ppp/2013/11/2701/Fast-food-1127235757.png");
   			}
   			
   			else if(providers1[0].category=='education'){
   				$("#image1").attr("src","https://cdn4.iconfinder.com/data/icons/BRILLIANT/education_icons/png/400/graduated.png");
   			}
   			
   			else if(providers1[0].category=='socialservice'){
   				$("#image1").attr("src","http://www.naz.edu/health-and-human-services/social-work/SW%20Documents/Social%20Event%20Icon.jpg/image_preview");
   			}
   			
   		}	
   		
   		
   		
   			mongoose.connect('mongodb://clouddata-2.cloud1.2971.mongodbdns.com:27000,clouddata-1.cloud1.2971.mongodbdns.com:27000,clouddata-0.cloud1.2971.mongodbdns.com:27000/houseServices',function(err){if(err){console.log(err)}});
   			provider.find({category:interest2,location:consumerLocation})
                .limit(3)
                .sort('-likes')
                .select('eventName category likes')
                .exec(function(err,providers2){
        			     if(err){console.log('err')}
        				
                  else {
        					mongoose.disconnect(function(err){if(err){console.log(err)}});
        		  		
 		   				
 		   			$("#interest2").text(providers2[0].category);
 		   			$("#category2event1").text(providers2[0].eventName+"("+providers2[0].likes+")");
   					$("#category2event2").text(providers2[1].eventName+"("+providers2[1].likes+")");
   					$("#category2event3").text(providers2[2].eventName+"("+providers2[2].likes+")");
   					$("#interest2Event1").attr("href",link+providers2[0].eventName+"/"+user);
   					$("#interest2Event2").attr("href",link+providers2[1].eventName+"/"+user);
   					$("#interest2Event3").attr("href",link+providers2[2].eventName+"/"+user);
            $("#allEvent2").attr("href","http://project-939413137.ap-southeast-1.elb.amazonaws.com/viewAllHappenings/"+interest2+"/"+user+"/"+consumerLocation);
   					$("#nearEvent2").attr("href","http://project-939413137.ap-southeast-1.elb.amazonaws.com/viewAllHappenings/"+interest2+"/"+user+"/"+nearestLocation);

   	    if(providers2[0].category=='music'){
   				$("#image2").attr("src","http://icons.iconarchive.com/icons/wwalczyszyn/iwindows/512/Music-Library-icon.png");
   			}
   				
   			else if(providers2[0].category=='sports'){
   				$("#image2").attr("src","http://modmyi.com/attachments/forums/iphone-5-new-skins-themes-launches/674613d1406083072-lion-d-sport-activities-football-icon.png");
   			}
   			
   			else if(providers2[0].category=='food'){
   				$("#image2").attr("src","http://www2.psd100.com/ppp/2013/11/2701/Fast-food-1127235757.png");
   			}
   			
   			else if(providers2[0].category=='education'){
   				$("#image2").attr("src","https://cdn4.iconfinder.com/data/icons/BRILLIANT/education_icons/png/400/graduated.png");
   			}
   			
   			else if(providers2[0].category=='socialservice'){
   				$("#image2").attr("src","http://www.naz.edu/health-and-human-services/social-work/SW%20Documents/Social%20Event%20Icon.jpg/image_preview");
   			}
   			
   					}
   					
   					
   					mongoose.connect('mongodb://clouddata-2.cloud1.2971.mongodbdns.com:27000,clouddata-1.cloud1.2971.mongodbdns.com:27000,clouddata-0.cloud1.2971.mongodbdns.com:27000/houseServices',function(err){if(err){console.log(err)}});
   					provider.find({category:interest3,location:consumerLocation})
                    .sort('-likes')
                    .select('eventName category likes')
                    .exec(function(err,providers3){
        					       if(err){console.log('err')}
        					
                        else {
        						mongoose.disconnect(function(err){if(err){console.log(err)}});
        		  		
 		   			

 		   			$("#interest3").text(providers3[0].category);
 		   			$("#category3event1").text(providers3[0].eventName+"("+providers3[0].likes+")");
   					$("#category3event2").text(providers3[1].eventName+"("+providers3[1].likes+")");
   					$("#category3event3").text(providers3[2].eventName+"("+providers3[2].likes+")");
   					$("#interest3Event1").attr("href",link+providers3[0].eventName+"/"+user);
   					$("#interest3Event2").attr("href",link+providers3[1].eventName+"/"+user);
   					$("#interest3Event3").attr("href",link+providers3[2].eventName+"/"+user);
            $("#allEvent3").attr("href","http://project-939413137.ap-southeast-1.elb.amazonaws.com/viewAllHappenings/"+interest3+"/"+user+"/"+consumerLocation);
   			    $("#nearEvent3").attr("href","http://project-939413137.ap-southeast-1.elb.amazonaws.com/viewAllHappenings/"+interest3+"/"+user+"/"+nearestLocation);
   			    

   			if(providers3[0].category=='music'){
   				console.log("yes");
   				$("#image3").attr("src","http://icons.iconarchive.com/icons/wwalczyszyn/iwindows/512/Music-Library-icon.png");
   			}
   				
   			else if(providers3[0].category=='sports'){
   				$("#image3").attr("src","http://modmyi.com/attachments/forums/iphone-5-new-skins-themes-launches/674613d1406083072-lion-d-sport-activities-football-icon.png");
   			}
   			
   			else if(providers3[0].category=='food'){
   				$("#image3").attr("src","http://www2.psd100.com/ppp/2013/11/2701/Fast-food-1127235757.png");
   			}
   			
   			else if(providers3[0].category=='education'){
   				$("#image3").attr("src","https://cdn4.iconfinder.com/data/icons/BRILLIANT/education_icons/png/400/graduated.png");
   			}
   			
   			else if(providers3[0].category=='socialservice'){
   				$("#image3").attr("src","http://www.naz.edu/health-and-human-services/social-work/SW%20Documents/Social%20Event%20Icon.jpg/image_preview");
   			}
   					}
   			
   				res.send(200,$.html());   	
   			});			
 		   });
        	}); 
        	
 }       	 
});

}
  });


});

module.exports = events;
