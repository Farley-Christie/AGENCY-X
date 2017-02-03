// JavaScript Document
(function() {
		"use strict";
console.log("Template file has loaded.");
	
		//var container = document.querySelector("#mainCon");
		//var newSection = document.createElement("section");
		//var clickMe = document.querySelector("#load");
		var indexPage = document.querySelector("#indexPage"),
		team = document.querySelector("#team"),
		feature = document.querySelector("#feature");

		var splashImg = document.querySelector("#splashImg"),
		centreCon = document.querySelector(".centreCon"),
		splashCopy = document.querySelector(".splashCopy");

		var con1h = document.querySelector("#con1h"),
		con1copy = document.querySelector("#con1copy"),
		con1img = document.querySelector("#con1img");

		var con2h = document.querySelector("#con2h"),
		con2copy = document.querySelector("#con2copy"),
		con2img = document.querySelector("#con2img");

		var rev = document.querySelector("#reviewCon");
	
		var splash = {
			indexPage: { 
				heading: "Is Time Travel Possible?", 
				copy: "Here at the London Time Agency, anything is possible. Even flying spaghetti monsters. Especially flying spaghetti monsters. Science is a wonderful and terrible thing, ladies and gentlemen. So stop on by today and our travel agents would be happy to help you find not only the perfect place, but the perfect time for your getaway vacation.", 
				image: "space.jpg"},
			team: {
				heading: "Meet The Team", 
			 	copy: "Meet out team of experienced time travel experts who will help make your time travel experience a safe and enjoyable one. All two of our time coordinators fully licenced time machine operators can help you pick where and when to spend your luxury vacation, through time!", 
			 	image: "timetravel.png"},
			feature: {
				heading: "Featured Time", 
			 	copy: "Travel back 201 million years to the excitement of the Jurassic era! Experience the thrill of the Age of Reptiles millions of years before the dawn of man. Trek through the lush forests of the recently separated Pangaea supercontinent where you will meet exotic wildlife that call this time period home.", 
				image: "jungle.jpg"}
		};

		var content1 = {
			indexPage: { heading: "Jurassic Era", 
			 copy: "Visit the lush and verdant landscapes of the Jurassic era on this one of a kind one-way trip! You'll positively be thrilled to experience the running of the triceratops event and the pterodactyl flights are truly magnificent. When you've run out of steam, stop by the Dino Diner and gift shop for your prehistoric memorabilia.", 
			 image: "dino1.png"},
			team: {heading: "Jesse Brunelle", 
			 copy: "Jesse Brunelle is a pioneer in time travel and quantum engineering, who received his degree in paradox resolution and applied temporal physics at the Mars University of Technology in the year 2056 after making his first time jump in 2017. When he found his way back to the present year he opened shop with Robert Christie to bring time travel vacations to the public. ", 
			 image: "jesface.png"},
			feature: {heading: "The Jurassic Era", 
			 copy: "Do you love adventure? Do you love dinosaurs? Do you really need that many limbs? All these questions and more can be answered in our luxury Jurassic getaway. Meet some of the largest flying animals of all time in this amazing time travel experience you won’t soon forget.", 
			 image: "dino2.png"},
		};

		var content2 = {
			indexPage: { heading: "2137 CE", 
			 copy: "Ever dreamt of what the future would be like? Now you don't have to with this special tour to the unique time period of 2177 CE where you can view the Great Wall of Mexico or visit the stunning virtual reality simulations all at your leisure.", 
			 image: "raygun.png"},
			team: {heading: "Robert Christie", 
			 copy: "Robert Christie is has been operating time machines in the downtown London area since 2084 and has over 20 years of experience. Robert Graduated form the Platonic Academy in 322 BCE with a degree in interpretive dance and ceased to exist in 1924 when he shot and killed his own grandfather.", 
			 image: "farface.png"},
			feature: {heading: "Photo Opportunities", 
			 copy: "Welcome to the golden age of the large herbivorous dinosaurs known as the Sauropods, these friendly giants make for excellent photo opportunities for you and your family. With our patented time technology you can enjoy all these wonderful sights and more in safety and comfort.", 
			 image: "dino3.png"},
		};
		
		function swapContent(evt){
			console.log(evt.target.id);
			if(evt.target.id=="indexPage"){
				//console.log(splash.indexPage.image);
				splashImg.src="images/"+splash.indexPage.image;
				centreCon.innerHTML=splash.indexPage.heading;
				splashCopy.innerHTML=splash.indexPage.copy;

				con1h.innerHTML=content1.indexPage.heading;
				con1copy.innerHTML=content1.indexPage.copy;
				con1img.src="images/"+content1.indexPage.image;

				con2h.innerHTML=content2.indexPage.heading;
				con2copy.innerHTML=content2.indexPage.copy;
				con2img.src="images/"+content2.indexPage.image;

				rev.style.display="block";

			}else if(evt.target.id=="team"){
				splashImg.src="images/"+splash.team.image;
				centreCon.innerHTML=splash.team.heading;
				splashCopy.innerHTML=splash.team.copy;

				con1h.innerHTML=content1.team.heading;
				con1copy.innerHTML=content1.team.copy;
				con1img.src="images/"+content1.team.image;

				con2h.innerHTML=content2.team.heading;
				con2copy.innerHTML=content2.team.copy;
				con2img.src="images/"+content2.team.image;

				rev.style.display="none";

			}else if(evt.target.id=="feature"){
				splashImg.src="images/"+splash.feature.image;
				centreCon.innerHTML=splash.feature.heading;
				splashCopy.innerHTML=splash.feature.copy;

				con1h.innerHTML=content1.feature.heading;
				con1copy.innerHTML=content1.feature.copy;
				con1img.src="images/"+content1.feature.image;

				con2h.innerHTML=content2.feature.heading;
				con2copy.innerHTML=content2.feature.copy;
				con2img.src="images/"+content2.feature.image;

				rev.style.display="none";
			}

		}
		/*
		function output(){
		var insertContent = "";
		
		for(var i=0; i<content.length; i++){
			insertContent += '<img src="'+content[i].image+'" alt="image"><p>'+content[i].heading+" "+content[i].copy+"</p>";
			}
		newSection.innerHTML = insertContent;
		container.appendChild(newSection);
		}
		*/

		//clickMe.addEventListener("click", output, false);
		indexPage.addEventListener("click", swapContent, false);
		team.addEventListener("click", swapContent, false);
		feature.addEventListener("click", swapContent, false);

		//don't need a new section, just to fill the sections we do have.
		//content needs to be tied to Nav links via listeners to select the individual links, even though there's only three links just loop the listeners to keep the code tidy?
		//the content needs to be called and placed in the proper containers. I imagine that it's as simple as making more objects and calling the right object to the right panel.
		//Testimonials need to be dropped on other pages through innerHTML, turning display off, something like that.
		//I think using something like child.node would be useful in selecting among the different panels. Yes.
		//Anything else? Well, obviously the code that's here needs to be modified.
		//instead of a new section, we want to insert the content into sections that already exist. To do that, we can change the innerHTML of an already existing section. The thing I'm wondering about is putting the content in order. Everything up to that point is pretty straightforward.
		//I think that's about it actually. This code base should be sufficient as a good starting point to quickly build out the functionality.
		//~Jesse

})();