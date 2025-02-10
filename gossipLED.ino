const int ledPin = 3;  

void setup() {
  pinMode(ledPin, OUTPUT); 
  Serial.begin(9600);      
}

void loop() {
  if (Serial.available() > 0) {
    int serialdata = Serial.read(); 

    if (serialdata == '1') {
      digitalWrite(ledPin, HIGH);  
    } else if (serialdata == '0') {
      digitalWrite(ledPin, LOW);   
    }
  }
}