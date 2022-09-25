function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/TltRJ5V4E/', modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if(error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    }

    document.getElementById("result_label").innerHTML = 'I can hear - '+
    results[0].label;
    document.getElementById("result_label").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("
    +random_number_r+","+random_number_g+","+random_number_r+")";



  img = document.getElementById('cat');
  img1 = document.getElementById('dog');
  img2 = document.getElementById('cow');
  img3 = document.getElementById('tiger');

  if (results[0].label == "Barking") {
    img.src = 'cat_png.jpg';
    img1.src = 'dog_png.jpg';
    img2.src = 'cow_png.jpg';
    img3.src = 'tiger_png.jpg';
  } else if (results[0].label == "Meowing") {
    img.src = 'cat_png.jpg';
    img1.src = 'dog_png.jpg';
    img2.src = 'cow_png.jpg';
    img3.src = 'tiger_png.jpg';
  } else if (results[0].label == "Mooing") {
    img.src = 'cat_png.jpg';
    img1.src = 'dog_png.jpg';
    img2.src = 'cow_png.jpg';
    img3.src = 'tiger_png.jpg';
} else if (results[0].label == "Roaring") {
    img.src = 'cat_png.jpg';
    img1.src = 'dog_png.jpg';
    img2.src = 'cow_png.jpg';
    img3.src = 'tiger_png.jpg';
  } else{
    img.src = 'cat_png.jpg';
    img1.src = 'dog_png.jpg';
    img2.src = 'cow_png.jpg';
    img3.src = 'tiger_png.jpg';
  }


}
