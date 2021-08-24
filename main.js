nosex=0;
nosey=0;
differance=0;
rightwristx=0;
leftwristx=0;


function setup(){
    video= createCapture(VIDEO);
    video.size(550 , 500);
    canvas= createCanvas(550,550);
    canvas.position(560,150);
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);



}

function modelLoaded(){
    console.log("poseNet is initialized")
}

function gotPoses (results){
    if(results.length>0){
        console.log(results)
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("nosex="+nosex+"nosey="+nosey);
        rightwristx = results[0].pose.rightWrist.x;
        leftwristx = results[0].pose.leftWrist.x;
        differance = floor(leftwristx-rightwristx);
        console.log("rightwristx="+rightwristx+"leftwristx="+leftwristx+"differance="+differance);
        
        




    }
}

function draw(){
    background('white');
    fill("aqua");
    stroke("aqua");
    square(nosex,nosey,differance);
    document.getElementById("font_sides").innerHTML = "width and height of a square will be= "+differance+"px";

    
    
}

