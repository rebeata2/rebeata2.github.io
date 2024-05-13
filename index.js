const counterLabel = document.getElementById("counterLabel");
const button_null = document.getElementById("button-null");
const button0 = document.getElementById("button0");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
let counter = 0;

button3.onclick = function(){
    counter+= 10;
    counterLabel.textContent = counter;
}
button2.onclick = function(){
    counter++;
    counterLabel.textContent = counter;
}
button1.onclick = function(){
    counter = 0;
    counterLabel.textContent = counter;
}
button0.onclick = function(){
    counter--;
    counterLabel.textContent = counter;
}
button_null.onclick = function(){
    counter-= 10;
    counterLabel.textContent = counter;
}
