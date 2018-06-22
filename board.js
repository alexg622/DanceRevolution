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









// let arrows = {
//   15: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x six',
//     direction: "left",
//     color: "yellow"
//   },
//   19: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   23: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x four',
//     direction: "left",
//     color: "yellow"
//   },
//   24: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x six',
//     direction: "right",
//     color: "purple"
//   },
//   25: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   27: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x four',
//     direction: "left",
//     color: "yellow"
//   },
//   31: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x six',
//     direction: "left",
//     color: "yellow"
//   },
//   35: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   39: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x four',
//     direction: "left",
//     color: "yellow"
//   },
//   40: {
//     element: 'I',
//     elClass: 'appended down fas fa-arrow-down fa-3x six',
//     direction: "down",
//     color: "blue"
//   },
//   41: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   42: {
//     element: 'I',
//     elClass: 'appended up fas fa-arrow-up fa-3x four',
//     direction: "up",
//     color: "red"
//   },
//   43: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x six',
//     direction: "left",
//          color: "yellow"
//   },
//   44: {
//     element: 'I',
//     elClass: 'appended down fas fa-arrow-down fa-3x fifteen',
//     direction: "down",
//     color: "blue"
//   },
//   45: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x four',
//     direction: "right",
//     color: "purple"
//   },
//   46: {
//     element: 'I',
//     elClass: 'appended up fas fa-arrow-up fa-3x six',
//     direction: "up",
//     color: "red"
//   },
//   47: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x four',
//     direction: "left",
//     color: "yellow"
//   },
//   51: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x six',
//     direction: "left",
//     color: "yellow"
//   },
//   55: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   56: {
//     element: 'I',
//     elClass: 'appended down fas fa-arrow-down fa-3x four',
//     direction: "down",
//     color: "blue"
//   },
//   57: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x six',
//     direction: "right",
//     color: "purple"
//   },
//   58: {
//     element: 'I',
//     elClass: 'appended up fas fa-arrow-up fa-3x fifteen',
//     direction: "up",
//     color: "red"
//   },
//   59: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x four',
//     direction: "left",
//     color: "yellow"
//   },
//   60: {
//     element: 'I',
//     elClass: 'appended down fas fa-arrow-down fa-3x six',
//     direction: "down",
//     color: "blue"
//   },
//   61: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   62: {
//     element: 'I',
//     elClass: 'appended up fas fa-arrow-up fa-3x four',
//     direction: "up",
//     color: "red"
//   },
//   63: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x six',
//     direction: "left",
//     color: "yellow"
//   },
//   67: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   73: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x four',
//     direction: "right",
//     color: "purple"
//   },
//   75: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x six',
//     direction: "left",
//     color: "yellow"
//   },
//   77: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   79: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x four',
//     direction: "left",
//     color: "yellow"
//   },
//   81: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x six',
//     direction: "left",
//     color: "yellow"
//   },
//   83: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   89: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x four',
//     direction: "right",
//     color: "purple"
//   },
//   91: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x six',
//     direction: "left",
//     color: "yellow"
//   },
//   93: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   95: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x four',
//     direction: "left",
//     color: "yellow"
//   },
//   97: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x six',
//     direction: "left",
//     color: "yellow"
//   },
//   99: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   105: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x four',
//     direction: "right",
//     color: "purple"
//   },
//   107: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x six',
//     direction: "left",
//     color: "yellow"
//   },
//   109: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   111: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x four',
//     direction: "left",
//     color: "yellow"
//   },
//   113: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x six',
//     direction: "left",
//     color: "yellow"
//   },
//   115: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   121: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x four',
//     direction: "right",
//     color: "purple"
//   },
//   123: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x six',
//     direction: "left",
//     color: "yellow"
//   },
//   125: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   127: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x four',
//     direction: "left",
//     color: "yellow"
//   },
//   129: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x six',
//     direction: "left",
//     color: "yellow"
//   },
//   131: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   135: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   137: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   139: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   140: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   141: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   143: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   145: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   147: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   148: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   149: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   151: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   153: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   155: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   156: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   157: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   158: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   159: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   160: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   161: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   162: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   163: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   164: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   165: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//
//   167: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   169: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   171: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   172: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   173: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   175: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   177: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   179: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   180: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   181: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   183: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   185: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   187: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   188: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   189: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   190: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   191: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   192: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   193: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   194: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   195: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   196: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   197: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//
//
//   199: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   201: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   203: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   204: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   205: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   207: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   209: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   211: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   212: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   213: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   215: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   217: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   219: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   220: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   221: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   222: {
//     element: 'I',
//     elClass: 'appended down fas fa-arrow-down fa-3x fifteen',
//     direction: "down",
//     color: "blue"
//   },
//   223: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   224: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   225: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   226: {
//     element: 'I',
//     elClass: 'appended down fas fa-arrow-down fa-3x fifteen',
//     direction: "down",
//     color: "blue"
//   },
//   227: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   228: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   229: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   230: {
//     element: 'I',
//     elClass: 'appended down fas fa-arrow-down fa-3x fifteen',
//     direction: "down",
//     color: "blue"
//   },
//   231: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   232: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   233: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   234: {
//     element: 'I',
//     elClass: 'appended down fas fa-arrow-down fa-3x fifteen',
//     direction: "down",
//     color: "blue"
//   },
//   235: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//
//
//
//   237: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   239: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   241: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   243: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   244: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   245: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   247: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   249: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   250: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   251: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   253: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   255: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   257: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   258: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   259: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   260: {
//     element: 'I',
//     elClass: 'appended down fas fa-arrow-down fa-3x fifteen',
//     direction: "down",
//     color: "blue"
//   },
//   261: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   262: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   263: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   264: {
//     element: 'I',
//     elClass: 'appended down fas fa-arrow-down fa-3x fifteen',
//     direction: "down",
//     color: "blue"
//   },
//   265: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   266: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   267: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   268: {
//     element: 'I',
//     elClass: 'appended down fas fa-arrow-down fa-3x fifteen',
//     direction: "down",
//     color: "blue"
//   },
//   269: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   270: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   271: {
//     element: 'I',
//     elClass: 'appended down fas fa-arrow-down fa-3x fifteen',
//     direction: "down",
//     color: "blue"
//   },
//   272: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   273: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//
//
//
//
//   274: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   275: {
//     element: 'I',
//     elClass: 'appended up fas fa-arrow-up fa-3x fifteen',
//     direction: "up",
//     color: "red"
//   },
//   276: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   277: {
//     element: 'I',
//     elClass: 'appended down fas fa-arrow-down fa-3x fifteen',
//     direction: "down",
//     color: "blue"
//   },
//   278: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   279: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   280: {
//     element: 'I',
//     elClass: 'appended up fas fa-arrow-up fa-3x fifteen',
//     direction: "up",
//     color: "red"
//   },
//   281: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   282: {
//     element: 'I',
//     elClass: 'appended down fas fa-arrow-down fa-3x fifteen',
//     direction: "down",
//     color: "blue"
//   },
//   283: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   284: {
//     element: 'I',
//     elClass: 'appended up fas fa-arrow-up fa-3x fifteen',
//     direction: "up",
//     color: "red"
//   },
//   285: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   286: {
//     element: 'I',
//     elClass: 'appended up fas fa-arrow-up fa-3x fifteen',
//     direction: "up",
//     color: "red"
//   },
//   287: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   288: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   289: {
//     element: 'I',
//     elClass: 'appended down fas fa-arrow-down fa-3x fifteen',
//     direction: "down",
//     color: "blue"
//   },
//   290: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   291: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   292: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   293: {
//     element: 'I',
//     elClass: 'appended down fas fa-arrow-down fa-3x fifteen',
//     direction: "down",
//     color: "blue"
//   },
//   294: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   295: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   296: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   297: {
//     element: 'I',
//     elClass: 'appended down fas fa-arrow-down fa-3x fifteen',
//     direction: "down",
//     color: "blue"
//   },
//   298: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   299: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   },
//   300: {
//     element: 'I',
//     elClass: 'appended down fas fa-arrow-down fa-3x fifteen',
//     direction: "down",
//     color: "blue"
//   },
//   301: {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x fifteen',
//     direction: "left",
//     color: "yellow"
//   },
//   302: {
//     element: 'I',
//     elClass: 'appended right fas fa-arrow-right fa-3x fifteen',
//     direction: "right",
//     color: "purple"
//   }
//
//
//
//
// }
//
//

let clockArrows

// function clock(arrows) {
//   let time = 0
//   let newEl
//   let startTime = Date.now()
//   let counter = startTime
//   clockArrows = setInterval(function(){
//
//     startTime = 0
//
//       counter = Date.now()
//       if(arrows[time] !== undefined) {
//         if(arrows[time].direction === "left") {
//           newEl = document.createElement(arrows[time].element)
//           newEl.className = arrows[time].elClass
//           newEl.removeAttribute("style")
//           newEl.style.top = "0px"
//           newEl.style.left = "0px"
//           newEl.style.position = "absolute"
//           newEl.style.color = arrows[time].color
//           newEl.style.textShadow = `0 0 10px ${arrows[time].color}, 0 0 20px ${arrows[time].color}, 0 0 30px ${arrows[time].color}, 0 0 40px ${arrows[time].color}, 0 0 70px ${arrows[time].color}, 0 0 80px ${arrows[time].color}, 0 0 100px ${arrows[time].color}, 0 0 150px ${arrows[time].color};`
//
//         } else if (arrows[time].direction === "right") {
//           newEl.className = arrows[time].elClass
//           newEl.removeAttribute("style")
//           newEl.style.top = "0px"
//           newEl.style.right = "0px"
//           newEl.style.position = "absolute"
//           newEl.style.color = arrows[time].color
//           newEl.style.textShadow = `0 0 10px ${arrows[time].color}, 0 0 20px ${arrows[time].color}, 0 0 30px ${arrows[time].color}, 0 0 40px ${arrows[time].color}, 0 0 70px ${arrows[time].color}, 0 0 80px ${arrows[time].color}, 0 0 100px ${arrows[time].color}, 0 0 150px ${arrows[time].color};`
//         } else if (arrows[time].direction === "up") {
//           newEl.className = arrows[time].elClass
//           newEl.removeAttribute("style")
//           newEl.style.top = "0px"
//           newEl.style.left = "42px"
//           newEl.style.position = "absolute"
//           newEl.style.color = arrows[time].color
//           newEl.style.textShadow = `0 0 10px ${arrows[time].color}, 0 0 20px ${arrows[time].color}, 0 0 30px ${arrows[time].color}, 0 0 40px ${arrows[time].color}, 0 0 70px ${arrows[time].color}, 0 0 80px ${arrows[time].color}, 0 0 100px ${arrows[time].color}, 0 0 150px ${arrows[time].color};`
//         } else if (arrows[time].direction === "down") {
//           newEl.className = arrows[time].elClass
//           newEl.removeAttribute("style")
//           newEl.style.top = "0px"
//           newEl.style.right = "42px"
//           newEl.style.position = "absolute"
//           newEl.style.color = arrows[time].color
//           newEl.style.textShadow = `0 0 10px ${arrows[time].color}, 0 0 20px ${arrows[time].color}, 0 0 30px ${arrows[time].color}, 0 0 40px ${arrows[time].color}, 0 0 70px ${arrows[time].color}, 0 0 80px ${arrows[time].color}, 0 0 100px ${arrows[time].color}, 0 0 150px ${arrows[time].color};`
//         }
//         document.querySelector(".arrows").innerHTML += newEl.outerHTML
//       }
//       time += 1
//   }, 1000)
// }
