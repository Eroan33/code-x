// Variable del clasificador
let classifier;
// URL del Modelo
let imageModelURL = "./ml_model/";

// Etiqueta que despliega la clasificación
let label = "";

// Factor de confiabilidad de la clasificación
let confidence;

// Lista desplegable de selección de imagen
let imageSelector;

// Arreglo que almacena los nombres de las imagenes
let imageNames;

// Diccionario de imagenes
let images = {};

// Imagen Actual Seleccionada
let selectedImage;

// Video
let video;
let flippedVideo;

// Precarga el modelo para clasificar y las imágenes
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + "model.json");
  loadImages();
}

// Carga los nombres de las imagenes de un archivo y cuando termina llama a imgNamesReady
function loadImages() {
  imageNames = loadStrings("img_names.txt", imgNamesReady);
}

// Carga todas las imagenes y selecciona la primera imagen para clasificarla
function imgNamesReady() {
  let imgFolder = "img/";

  for (imgName of imageNames) {
    let imgPath = imgFolder + imgName;
    images[imgName] = createImg(imgPath);
    images[imgName].hide();
  }
  selectedImage = images[Object.keys(images)[0]]
  classifyImage();
}

function setup() {
  // Crea una area de dibujo de 320 x 260 pixeles
  createCanvas(600, 600);
  
  // Crea una lista desplegable con los nombres de las imagenes
  imageSelector = createSelect();

  for (imgName of imageNames) {
    imageSelector.option(imgName);
  }

  imageSelector.changed(changeImage);
}

// Cambia la imagen seleccionada y la clasifica
function changeImage() {
  selectedImage = images[imageSelector.value()];
  classifyImage();
}

// Inicia la clasificación de la imagen
function classifyImage() {
  classifier.classify(selectedImage, gotResult);
}

function draw() {
  background(0);
  // Dibuja imagen seleccionada
  image(selectedImage, 0, 0, width, height-120);
  fill(0,200);
  rect(0,height-120, width,120);

  // Dibuja resultados de la clasificación 
  fill(255);
  textSize(60);
  textAlign(CENTER);
  text(label, width/2, height - 60);
  text(confidence, width/2, height-10);
}

// Resultados de la clasificacion
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // Los resultados se arrojan en el arreglo results ordenados por nivel de confianza
  label = results[0].label.toUpperCase();
  confidence = "confianza: "+results[0].confidence.toFixed(2);;
}
