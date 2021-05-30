const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var bg="sunrise3.png";
var hours;
var minutes;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(windowWidth,650);
    engine = Engine.create();
    world = engine.world;

}

function draw(){


    // add condition to check if any background image is there to add
      if(backgroundImg){
          background(backgroundImg);
      }

    Engine.update(engine);

    // write code to display time in correct format here
    var twelvehoursformat=hours%12 || 12;
    if(hours>=12 && hours<=23){
        noStroke();
        fill("blue");
        textSize(24);
        textFont("bold");
        text("Time: "+twelvehoursformat+":"+minutes+" pm",width/8.6,100);
    }else{
        noStroke();
        fill("blue");
        textSize(24);
        textFont("bold");
        text("Time: "+twelvehoursformat+":"+minutes+" am",width/8.6,100);
    }

if(minutes === "undefined" || hours === "undefined"){
    return "0";
}else{
    return"1";
}

}

async function getBackgroundImg(){

    // write code to fetch time from API
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
var responseJSON = await response.json();
    // write code slice the datetime

    var datetime = responseJSON.datetime;
 
    hours= datetime.slice(11,13);
    minutes = datetime.slice(14,16);
    console.log(minutes);

    // add conditions to change the background images from sunrise to sunset
    if(hours>=04 && hours<=06 ){
        
        bg = "sunrise1.png";
    }else if(hours>=06 && hours<=08 ){
        
        bg = "sunrise2.png";
    }else if(hours>=08 && hours<=11 ){
        
        bg = "sunrise3.png";
    }else if(hours>=11 && hours<=13){
        
        bg = "sunrise4.png";
    }else if(hours>=13 && hours<=15){
    
        bg = "sunrise5.png";
    }else if(hours>=15 && hours<=17 ){
        
        bg = "sunrise6.png";
    }else if(hours>=17 && hours<=18 ){
    
        bg = "sunset7.png";
    }else if(hours>=18 && hours<=20 ){
        
        bg = "sunset8.png";
    }else if(hours>=20 && hours<=23 ){
        
        bg = "sunset9.png";
    }else if(hours>=23 && hours==0){
        
        bg = "sunset10.png";
    }else if(hours==0 && hours<=03){
    
        bg = "sunset11.png";
    }else{
        bg="sunset12.png";
    }


    //load the image in backgroundImg variable here
backgroundImg=loadImage(bg);
console.log(backgroundImg);
}
setTimeout(function() {
    location. reload();
    }, 30000);