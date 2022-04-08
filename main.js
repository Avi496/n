video="";
statusx="";
function preload(){
    video=createVideo("video.mp4");
    video.hide();
}
function setup(){
    canvas=createCanvas(480, 380);
    canvas.center();
}
function draw(){
    image(video, 0, 0, 480, 380);
}
function marty(){
    objectDetector=ml5.objectDetector("cocossd", modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects.";
}
function modelloaded(){
    console.log("model has loaded.")
    statusx=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}