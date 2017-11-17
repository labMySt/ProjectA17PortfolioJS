
console.log("OK");
		var API_KEY = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjIxZjUyZjkzNWFiZTJjMGVhMmFhY2I0ZjZjZDY5MDc5ZjdjMzAxZjhiOGM5YzgyZDhiZWI3YTIyN2YxYzYxZDYzYjMwZTI1OGNmODE2ZGMzIn0.eyJhdWQiOiIxMCIsImp0aSI6IjIxZjUyZjkzNWFiZTJjMGVhMmFhY2I0ZjZjZDY5MDc5ZjdjMzAxZjhiOGM5YzgyZDhiZWI3YTIyN2YxYzYxZDYzYjMwZTI1OGNmODE2ZGMzIiwiaWF0IjoxNTA4MDkyNDM1LCJuYmYiOjE1MDgwOTI0MzUsImV4cCI6MTgyMzYyNTIzNSwic3ViIjoiNzQ2Iiwic2NvcGVzIjpbInVzZXJCYXNlSW5mbyIsInVzZXJEZXRhaWxlZEluZm8iLCJ1c2VyQ291cnNlSW5mbyJdfQ.PXSnBaNXPuFVLEv44SR6biov-9vh3Tqz1Xg7JuHIgRsPJTl3woHYkwh2_KXi19Ha-DNcJf5u58CzTcUdzvnc7ZpTRk0o_P0PeDvimFTqghG9eMr7CsS-i9pMpzI9T5Fudpcy1SNt3YHvGxTDu6qg3Ux0VyJLk9v-WZeGrGlJ4XGmF9FnO7Os_W3hbiDKKOmDfbWTKQlcAfP0jUcEfjUPG6vC7cxa6lP_1bFXpmfNLzZGOslVevxbzU7ioDwlP9s5_uTKWUL7EzKG6ZT8awn1F2jMCBX4pN7Sscu_xtSd16YbIS_D3xYG9upcx_iSvCxMF__WpVrzSRTwCgsmYOtOf-2cQMTprWJqg7shRiwCu38IkrRBQhGo0YMw8R_-qHTms1_225NBVuSzYnXG0-bTbp35Hm7WzepAjaxfchirBhAcuFPV1CPwc0rS4_RQnqhA4DMcc691sr96QMlEwkbBosJ_GVjla52oUo7khT1tjsavs3R6IxaCaPOsnYo5_arIylfUs98XgoZH1hFdbkGT4z9ODkE8cOAs6WtYcYplk8nC1WDxv8izyy6WLC7cU8fz_KBkDkCIyktuDK9A-ojS6GanJmaqEayuQqPawS0xnUj07BiWPbr3ILSGHAs52_Vuv5TiKld_T9mHAEHryWS6z8-c4TxTprlFHWPeK47C6PI";
		var client = new INTITAClient({
        key : API_KEY,
        });  
	    console.log(client);
				
		var my_id=746;	

client.getUserDetails(my_id, function (error, data) {
console.log(error, data)
document.getElementById("avatar").src = data.avatar;
document.getElementById("firstN").innerText = data.firstName + ' ' + data.secondName;		

document.getElementById("facelink").href = data.facebook;
document.getElementById("twitterlink").href = data.twitter;
document.getElementById("googleplus").href = data.googleplus;
document.getElementById("sity").innerText = data.city;
document.getElementById("adress").innerText = data.address;
document.getElementById("phone").innerText = data.phone;
//document.getElementById("email").href = data.email;
document.getElementById("email").innerText = data.email;

document.getElementById("educationForm").innerText = data.educationForm;
document.getElementById("education").innerText = data.education;
document.getElementById("aboutMy").innerText = data.aboutMy;
document.getElementById("interests").innerText = data.interests;
var trenerId = data.trainers;
document.getElementById("interests").innerText = data.interests;
document.getElementById("trainers").innerText = trenerId[0].firstName + ' ' + trenerId[0].secondName;

 });




 client.getUserCoursesAndModules(my_id, function (error, data) {
 console.log(error, data)
 var cursesId = data.courses[0].id;

        client.getCourseInfo(cursesId, function (error, data) {
       console.log(error, data)
           
              document.getElementById("aboutcurses").innerText = data.title_ua;


        });
       client.getCourseModules(cursesId, function (error, data) {
       console.log(error, data)

           var massHtml = document.getElementsByClassName("curses");
           
           for(i in data)
           {
           	massHtml[i].innerText = data[i].title ;
         
           }

       });
          
 });
