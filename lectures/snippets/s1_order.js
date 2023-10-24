function setup() {
    createCanvas(100, 100);
}

function draw() {
    background(255, 48, 67); //Change background
    
    fill(0, 0, 255); //styling of the left circle
    noStroke(); //styling of the left circle
    circle(25, 50, 20);

    fill(255, 0, 0); //styling of the right circle
    stroke(0, 0, 0); //styling of the right circle
    circle(75, 50, 20);
}