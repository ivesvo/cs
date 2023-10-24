let x=0; // declare the variable to host the x location of the circle and its starting value

function setup() {
    createCanvas(100, 100);
}

function draw() {
    background(220, 220, 220);
    fill(255, 0, 0, 20);
    circle(x, 50, 40);
    x=x+1
}