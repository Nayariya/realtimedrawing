noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristY = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(500,450);

   canvas =  createCanvas(500,450);
    canvas.position(560,135);
    poseNet = ml5.poseNet('poseNet', modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('poseNet is Intialized!')
}

function draw() {
   background ('#ADD8E6');
   document.getElementById("square_side").innerHTML = "Width and Height of the Square will be " + difference + "px";
   fill('#000000');
   stroke('#000000');
   square(noseX, noseY , difference);
   nofill();
}

function gotPoses(results) {
    if (results.length > 0 )
    {
        console.log(results);
        noseX = results[0] .pose.nose.x;
        noseY = results[0] .pose.nose.y;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0] .pose.leftWrist.x;
        rightWristX = results[0] .pose.rightWrist.x;
        difference = floor(leftWristX  - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}
