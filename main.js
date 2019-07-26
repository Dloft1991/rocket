var rocket=document.getElementById("rocket");
var container=document.getElementById("container");

var rocketLeft = 550;
var rocketTop = 500;

function anim(e){
    if(e.keyCode==39){
        rocketLeft +=15;
        rocket.style.left = rocketLeft + 'px';
        console.log("left")
    }
    if(e.keyCode==37){
        rocketLeft -=15;
        rocket.style.left = rocketLeft + 'px';
        if(rocketLeft <=0){
            rocketLeft +15;
        }
    }
    if(e.keyCode==40){
        rocketTop +=15;
        rocket.style.top = rocketTop + 'px';
    }
    if(e.keyCode==38){
        rocketTop -=15;
        rocket.style.top = rocketTop + 'px';
        if(rocketTop <=0){
            rocketTop +15;
            console.log("up")
        }
        else if(rocketTop ===50) {
            rocketTop -450;
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