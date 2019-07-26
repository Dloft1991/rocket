var rocket=document.getElementById("rocket");
var container=document.getElementById("container");

var rocketLeft = 0;
var rocketTop = 70;

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