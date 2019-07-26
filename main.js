var rocket=document.getElementById("rocket");
var alien=document.getElementById("alien");
var container=document.getElementById("container");

var rocketLeft = 550;
var rocketTop = 500;

var alienLeft = 0;
var alienTop = 50;

function anim(e){
    if(e.keyCode==39){
        alienLeft +=15;
        alien.style.left = alienLeft + 'px';
        console.log("left")
    }
    if(e.keyCode==37){
        alienLeft -=15;
        alien.style.left = alienLeft + 'px';
        if(alienLeft <=0){
            alienLeft +15;
        }
        else if(alienLeft ==100) {
            alienLeft = 0;
        }
    }
    // if(e.keyCode==40){
    //     rocketTop +=15;
    //     rocket.style.top = rocketTop + 'px';
    // }
    if(e.keyCode==38){
        rocketTop -=15;
        rocket.style.top = rocketTop + 'px';
        if(rocketTop <=0){
            rocketTop +15;
            console.log("up")
        }
        else if(rocketTop <=100) {
            rocketTop = 515;
            rocketLeft = 550;
        }
    }
}

// function anim(e){
//     if(e.keyCode==40){
//         rocketTop +=10;
//         rocket.style.top = rocketTop + 'px';
//     }
//     if(e.keyCode==38){
//         rocketTop -=10;
//         rocket.style.top = rocketTop + 'px';
//         if(rocketTop <=0){
//             rocketTop +10;
//             console.log("up")
//         }
//     }
// }

document.onkeydown = anim;