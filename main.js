noseX=0;
noseY=0;

function preload(){
clown_nose=loadImage("https://i.postimg.cc/x8fyKMNK/moustache-PNG18.png")
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    //createCapture is a function used to access the video from the webcam
    video.size(300,300);
    video.hide();

    posenet=ml5.poseNet(video,modeloaded);
    posenet.on('pose',gotposes);   
}
function modeloaded(){
    console.log("posenet is initialized");

}
function gotposes(result){
    console.log(result);
    noseX=result[0].pose.nose.x-25;
    noseY=result[0].pose.nose.y-15;
    console.log("noseX= "+noseX+"noseY= "+noseY)

}
function draw(){
    image(video,0,0,300,300);
    //image is a function used to upload image or video inside the canvas image(file,x,y,width,height)
    fill("red");
    stroke("red")
    //circle(noseX,noseY,20);
    image(clown_nose,noseX,noseY,80,80);

}
function take_snapshot(){
    save('my_image.jpg');
}

