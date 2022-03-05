status="";
img="";
objects=[];
function preload(){
    img=loadImage('https://media.istockphoto.com/photos/happy-border-collie-dog-and-tabby-cat-together-closeup-picture-id1138523235?k=20&m=1138523235&s=612x612&w=0&h=K6lpiSJBvyqtghCESa9YsbKYrsvRJnS4Po0Jr8djuIw=');
    
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.position(450,150);
    objectdetector= ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelloaded(){
    console.log("model is loaded !");
    status=true;
    objectdetector.detect(img, gotresults);
}

function gotresults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}
function draw(){
    image(img,0,0,640,420);
   if(status!= "") {
       for(index=0;index<objects.length;index+1){
           document.getElementById("status").innerHTML= "Status : Object Detected";
           fill('#ed5d1f');
           percent=floor(objects[index]*100);   
           text(objects[index].label + " " + percent + "%", objects[index].x,objects[index].y);
            
            
       }
   }  

    
}
