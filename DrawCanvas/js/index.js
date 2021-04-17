function setup() {
    console.log("setup")
    createCanvas(window.innerWidth, window.innerHeight)
}

function draw() {
    console.log("draw")

    if (mouseIsPressed) {
        console.log("mouse", mouseX, mouseX)
        fill(1)
        circle(mouseX, mouseY, 10)

    }

    //circle(mouseX, mouseY, 10)
}