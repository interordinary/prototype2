let img;
let sound;
let lastPlayed = 0;
let delay = 1000;
let serial;

function preload() {
  img = loadImage('error.png');
  sound = loadSound('error.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  serial = createSerial();

  connectBtn = createButton('connect to Arduino');
  connectBtn.position(20,20);
  connectBtn.mousePressed(connectBtnClick);

  image(img,200,200)
}

function draw() {
  let x = noise(frameCount*0.01)*width;
  let y = noise(frameCount*0.01+100)*height;
  image(img, x, y, random(width*0.1), random(height*0.1) );


  
  if (millis() - lastPlayed > delay) {
    sound.play();
    lastPlayed = millis();
    sendSignalToArduino(1);

  }else {
      sendSignalToArduino(0);
    }

  }

  function mousePressed() {
    sound.play();
  }


function sendSignalToArduino(value) {
  if (serial.opened()) {
    serial.write(value);  // Send either "1" or "0" to the Arduino
  }
}

function connectBtnClick() {
  if (!serial.opened()) {
    console.log("Opening serial connection...");

    serial.open('Arduino', 9600); 
  } else {
    console.log("Closing serial connection...");
    serial.close();
  }

}
