Objects= [];
xyz = "";

function preload(){
    video = createVideo("video.mp4");
}
function setup(){
    canvas = createCanvas(490,351);
    canvas.center();
    video.hide();
}
function start(){
    objectdetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "status:detecting objects";
}
function modelloaded(){
    console.log("model included");
    xyz = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function draw(){
    image(video,0,0,490,351);
    if(xyz!=""){
    objectdetector.detect(video,gotResult);
    for(i=0;i<Objects.length;i++){
        document.getElementById("numberofobjects").innerHTML = "number of objects detected are:"+Objects.length;
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+ percent+"%",objects[i].x, objects[i].y);
        stroke("chrome");
        rect(objects[i].x, objects[i].y,objects[i].width,objects[i].height);
    }

    }


}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    if (results){
        console.log(results);
        Objects = results;

    }
}







