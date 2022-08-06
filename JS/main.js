Webcam.set({
    width: 432,
    height: 288,
    image_format: 'png',
    png_quality: 1080
})

camera = document.querySelector("#webcam")
console.log(camera)

Webcam.attach("#webcam")

function TakeSnapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("snapshot").style.backgroundImage = "url('"+data_uri+"')"
    })
}

console.log(ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/HYj6ugUjn/model.json", yo)

function yo() {
    console.log("Yes it works brooooooo")
}