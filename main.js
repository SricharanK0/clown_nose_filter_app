noseX=0;
noseY=0;

function preload(){
    clown_nose=loadImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d096f516-136d-45dc-a6a5-77fd67e4028d/dcqxxbj-3fc305da-1027-4541-8f98-027efdd3fee2.png/v1/fill/w_1024,h_871,strp/clown_nose_s_asset_by_makayla20161_dcqxxbj-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODcxIiwicGF0aCI6IlwvZlwvZDA5NmY1MTYtMTM2ZC00NWRjLWE2YTUtNzdmZDY3ZTQwMjhkXC9kY3F4eGJqLTNmYzMwNWRhLTEwMjctNDU0MS04Zjk4LTAyN2VmZGQzZmVlMi5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.-39pdrkW_zDDx18dlQ9ZOLdPf9JzhsnpZIoptf6ziB8");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("Model Loaded");
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,35,35)
}
function take_snapshot(){
    save("clown_nose_selfie.jpg");

}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
        console.log("Nose X="+noseX);
        console.log("Nose Y="+noseY);
    }
}