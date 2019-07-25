function Rocket() {
//    const rocket = document.getElementById("rocket");
   this.x = 0;
   this.y = 0;
   this.xspeed = 0;
   this.yspeed = 0;
}


function moveUp() {
    console.log("This is up");
    rocket.posY++;
}

function moveDown() {
    console.log("This is down");
    rocket.posY--;
}

function moveLeft() {
    console.log("This is left");
}

function moveRight() {
    console.log("This is right");
}
