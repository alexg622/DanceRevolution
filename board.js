// document.addEventListener("DOMContentLoaded", () => {
//   playbtn.addEventListener("click", playPause);
//   initAudio(audio);
//   document.onkeydown = checkKey;
//   document.onkeyup = upKey;
// })
//
//
//
//
//
// function checkKey(e) {
//
//     e = e || window.event;
//     if (e.keyCode === 38) {
//         // up arrow
//         let up = document.querySelector(".up")
//         up.style.color = "lightred"
//         up.style.textShadow = "3px 3px 40px red"
//     }
//     else if (e.keyCode == '40') {
//         // down arrow
//         let down = document.querySelector(".down")
//         down.style.color = "white"
//         down.style.textShadow = "3px 3px 40px blue"
//     }
//     else if (e.keyCode === 37) {
//        // left arrow
//        let left = document.querySelector(".left")
//        left.style.color = "white"
//        left.style.textShadow = "3px 3px 40px yellow"
//     }
//     else if (e.keyCode === 39) {
//        // right arrow
//        let right = document.querySelector(".right")
//        right.style.color = "white"
//        right.style.textShadow = "3px 3px 40px purple"
//        // spacebar
//     } else if (e.keyCode === 32) {
//
//     }
//
// }
//
//
// function upKey(e) {
//
//     e = e || window.event;
//     console.log(e.keyCode);
//     if (e.keyCode === 38) {
//         // up arrow
//         let up = document.querySelector(".up")
//         up.style.color = "white"
//         up.style.textShadow = "none"
//     }
//     else if (e.keyCode == '40') {
//         // down arrow
//         let down = document.querySelector(".down")
//         down.style.color = "white"
//         down.style.textShadow = "none"
//     }
//     else if (e.keyCode === 37) {
//        // left arrow
//        let left = document.querySelector(".left")
//        left.style.color = "white"
//        left.style.textShadow = "none"
//     }
//     else if (e.keyCode === 39) {
//        // right arrow
//        let right = document.querySelector(".right")
//        right.style.color = "white"
//        right.style.textShadow = "none"
//     }
//
// }
//
// function clock() {
//   setInterval(function(){
//     let time = 0
//     console.log(time);
//     time += 1
//   }, 1000)
// }
//
//
//
// let audio = new Audio()
// audio.src = "./music/01 Morphine (Radio Edit).m4a"
// let playbtn = document.querySelector(".fa-youtube");
// let mutebtn = document.querySelector(".fa-pause-circle");
//
// function playPause() {
//   if(audio.paused) {
//     audio.play();
//     playbtn.className = "far fa-pause-circle fa-2x"
//   } else {
//     audio.pause();
//     playbtn.className = "fab fa-youtube fa-2x"
//   }
// }
//
//
// function initAudio(audio){
//   audio.play()
// }
//
// playbtn.addEventListener("click", () => {
//   clock();
// })
