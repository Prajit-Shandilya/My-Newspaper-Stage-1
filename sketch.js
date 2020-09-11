var bg;

function preload() {
    bg = loadImage("resources/background.jpg");

}

function setup() {

    createCanvas(displayWidth, displayHeight);


}

function draw() {
    background(bg);
    textSize(85);
    fill(255, 0, 0);
    textFont("algerian");
    text("My Newspaper", displayWidth / 2 - 250, displayHeight / 2);
}