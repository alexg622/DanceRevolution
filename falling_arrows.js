// document.addEventListener("DOMContentLoaded" () => {
//   let rightArrow = document.getElementById("appended-right");
//   let leftArrow = document.getElementById("appended-left");
//   fallArrow(leftArrow)
//   fallArrow(rightArrow)
// })
// __________________________________________________________
document.addEventListener("DOMContentLoaded", () => {
  playbtn.addEventListener("click", playPause);
  initAudio(audio);
  document.onkeydown = checkKey;
  document.onkeyup = upKey;
})


let gotIt = ["625px", "626px", "627px", "628px", "629px", "630px", "631px", "632px", "633px", "634px", "635px", "636px", "637px", "638px",
"639px", "640px", "641px", "642px", "643px", "644px", "645px", "646px", "647px", "648px", "649px", "650px", "651px", "652px", "653px",
"654px", "655px", "656px", "657px", "658px", "659px", "660px"]
let points = 0

function checkKey(e) {

    e = e || window.event;
    if (e.keyCode === 38) {
        // up arrow
        let up = document.querySelector(".up")
        up.style.color = "lightred"
        up.style.textShadow = "0 0 10px red, 0 0 20px red, 0 0 30px red, 0 0 40px red, 0 0 70px red, 0 0 80px red, 0 0 100px red, 0 0 150px red"


        let upArrows = document.getElementsByClassName("up")
        for (k in upArrows) {
          if (upArrows[k].style !== undefined) {
            if (gotIt.includes(upArrows[k].style.top)) {
              points += 10
              document.querySelector(".points").innerText = `Points: ${points}`
              upArrows[k].remove()
            }
          }
        }

    }
    else if (e.keyCode == '40') {
        // down arrow
        let down = document.querySelector(".down")
        down.style.color = "white"
        down.style.textShadow = "0 0 10px lightblue, 0 0 20px lightblue, 0 0 30px lightblue, 0 0 40px lightblue, 0 0 70px lightblue, 0 0 80px lightblue, 0 0 100px lightblue, 0 0 150px lightblue"

        let downArrows = document.getElementsByClassName("down")
        for (k in downArrows) {
          if (downArrows[k].style !== undefined) {
            if (gotIt.includes(downArrows[k].style.top)) {
              points += 10
              document.querySelector(".points").innerText = `Points: ${points}`
              downArrows[k].remove()
            }
          }
        }

    }
    else if (e.keyCode === 37) {
       // left arrow
       let left = document.querySelector(".left")
       left.style.color = "white"
       left.style.textShadow = "0 0 10px yellow, 0 0 20px yellow, 0 0 30px yellow, 0 0 40px yellow, 0 0 70px yellow, 0 0 80px yellow, 0 0 100px yellow, 0 0 150px yellow"


       let leftArrows = document.getElementsByClassName("left")
       for (k in leftArrows) {
         if (leftArrows[k].style !== undefined) {
           if (gotIt.includes(leftArrows[k].style.top)) {
             points += 10
             document.querySelector(".points").innerText = `Points: ${points}`
             leftArrows[k].remove()
           }
         }
       }

    }
    else if (e.keyCode === 39) {
       // right arrow
       let right = document.querySelector(".right")
       right.style.color = "white"
       right.style.textShadow = "0 0 10px lightgreen, 0 0 20px lightgreen, 0 0 30px lightgreen, 0 0 40px lightgreen, 0 0 70px lightgreen, 0 0 80px lightgreen, 0 0 100px lightgreen, 0 0 150px lightgreen"

       let rightArrows = document.getElementsByClassName("right")
       for (k in rightArrows) {
         if (rightArrows[k].style !== undefined) {
           if (gotIt.includes(rightArrows[k].style.top)) {
             points += 10
             document.querySelector(".points").innerText = `Points: ${points}`
             rightArrows[k].remove()
           }
         }
       }
       // spacebar
    } else if (e.keyCode === 32) {

    }

}

function upKey(e) {

    e = e || window.event;
    if (e.keyCode === 38) {
        // up arrow
        let up = document.querySelector(".up")
        up.style.color = "white"
        up.style.textShadow = "none"
    }
    else if (e.keyCode == '40') {
        // down arrow
        let down = document.querySelector(".down")
        down.style.color = "white"
        down.style.textShadow = "none"
    }
    else if (e.keyCode === 37) {
       // left arrow
       let left = document.querySelector(".left")
       left.style.color = "white"
       left.style.textShadow = "none"
    }
    else if (e.keyCode === 39) {
       // right arrow
       let right = document.querySelector(".right")
       right.style.color = "white"
       right.style.textShadow = "none"
    }

}



let startingTime

let audio = new Audio()

audio.src = "./music/01 Morphine (Radio Edit).m4a"
let playbtn = document.querySelector(".fa-youtube");
let mutebtn = document.querySelector(".fa-pause-circle");

function playPause() {
  if(audio.paused) {
    audio.play();
    playbtn.className = "far fa-pause-circle fa-2x"
    // clock(arrows);
    // animations()
    // run(arrows)
    startingTime = performance.now()
    requestAnimationFrame(easyCallback)
    fallArrow();
  } else {
    audio.pause();
    playbtn.className = "fab fa-youtube fa-2x"
    clearInterval(fallArrowInterval)
    clearInterval(clockArrows)
  }
}


function initAudio(audio){
  audio.play()
}



// __________________________________________________________
let counter = 7
let arrows = {}
// for (i=15; i<800; i++) {


//   arrows[counter] = [
//     {
//     element: 'I',
//     elClass: 'appended left fas fa-arrow-left fa-3x six',
//     direction: "left",
//     color: "yellow"
//     },
//     {
//       element: 'I',
//       elClass: 'appended right fas fa-arrow-right fa-3x six',
//       direction: "right",
//       color: "purple"
//     },
//     {
//       element: 'I',
//       elClass: 'appended up fas fa-arrow-up fa-3x four',
//       direction: "up",
//       color: "red"
//     },
//     {
//       element: 'I',
//       elClass: 'appended down fas fa-arrow-down fa-3x fifteen',
//       direction: "down",
//       color: "blue"
//     }
//   ][Math.floor((Math.random() * 3) + 0)]
//
//
//
//   // if (i % [3, 16, 8, 32][Math.floor(Math.random() * 3) + 0] === 0) {
//   //   counter += 2
//   // } else {
//   //   counter += 1
//   // }
//   counter += 1
// }






for (i=7; i<500; i++) {


  arrows[counter] = [
    {
    element: 'I',
    elClass: 'appended left fas fa-arrow-left fa-3x six',
    direction: "left",
    color: "yellow"
    },
    {
      element: 'I',
      elClass: 'appended right fas fa-arrow-right fa-3x six',
      direction: "right",
      color: "lightgreen"
    },
    {
      element: 'I',
      elClass: 'appended up fas fa-arrow-up fa-3x four',
      direction: "up",
      color: "red"
    },
    {
      element: 'I',
      elClass: 'appended down fas fa-arrow-down fa-3x fifteen',
      direction: "down",
      color: "lightblue"
    }
  ][Math.floor((Math.random() * 3) + 0)]



  if (i % [32, 8, 6, 64][Math.floor(Math.random() * 1) + 0] === 0) {
    counter += 2
  } else {
    counter += 1
  }
}




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

function getTopOfEl(element){
  let num1 = 0
  if (element.style !== undefined) {
    if (element.style.top.valueOf(top).length === 3) {
      num1 = parseInt(element.style.top.valueOf(top).slice(0, 1))
    } else if (element.style.top.valueOf(top).length === 4) {
      num1 = parseInt(element.style.top.valueOf(top).slice(0, 2))
    } else if (element.style.top.valueOf(top).length === 5) {
      num1 = parseInt(element.style.top.valueOf(top).slice(0, 3))
    }
    return num1
  }
}

let fallArrowInterval
function fallArrow() {
  fallArrowInterval = setInterval(function(){
    let allArrows = document.getElementsByClassName("appended")
      for (k in allArrows) {
        let addNum = getTopOfEl(allArrows[k])
        addNum = addNum + 2
        let insertNewPx = `${addNum}px`
        if (allArrows[k].style !== undefined) {
          allArrows[k].style.top = insertNewPx
          if (allArrows[k].style.top === "680px") {
            allArrows[k].remove();
          }
        }
      }
  }, 6);
}

let clockArrows

function clock(arrows) {
  let time = 0
  let newEl
  let startTime = Date.now()
  let counter = startTime
  clockArrows = setInterval(function(){

    startTime = 0

      counter = Date.now()
      if(arrows[time] !== undefined) {
        if(arrows[time].direction === "left") {
          newEl = document.createElement(arrows[time].element)
          newEl.className = arrows[time].elClass
          newEl.removeAttribute("style")
          newEl.style.top = "0px"
          newEl.style.left = "0px"
          newEl.style.position = "absolute"
          newEl.style.color = arrows[time].color
          newEl.style.textShadow = `0 0 10px ${arrows[time].color}, 0 0 20px ${arrows[time].color}, 0 0 30px ${arrows[time].color}, 0 0 40px ${arrows[time].color}, 0 0 70px ${arrows[time].color}, 0 0 80px ${arrows[time].color}, 0 0 100px ${arrows[time].color}, 0 0 150px ${arrows[time].color};`

        } else if (arrows[time].direction === "right") {
          newEl.className = arrows[time].elClass
          newEl.removeAttribute("style")
          newEl.style.top = "0px"
          newEl.style.right = "0px"
          newEl.style.position = "absolute"
          newEl.style.color = arrows[time].color
          newEl.style.textShadow = `0 0 10px ${arrows[time].color}, 0 0 20px ${arrows[time].color}, 0 0 30px ${arrows[time].color}, 0 0 40px ${arrows[time].color}, 0 0 70px ${arrows[time].color}, 0 0 80px ${arrows[time].color}, 0 0 100px ${arrows[time].color}, 0 0 150px ${arrows[time].color};`
        } else if (arrows[time].direction === "up") {
          newEl.className = arrows[time].elClass
          newEl.removeAttribute("style")
          newEl.style.top = "0px"
          newEl.style.left = "42px"
          newEl.style.position = "absolute"
          newEl.style.color = arrows[time].color
          newEl.style.textShadow = `0 0 10px ${arrows[time].color}, 0 0 20px ${arrows[time].color}, 0 0 30px ${arrows[time].color}, 0 0 40px ${arrows[time].color}, 0 0 70px ${arrows[time].color}, 0 0 80px ${arrows[time].color}, 0 0 100px ${arrows[time].color}, 0 0 150px ${arrows[time].color};`
        } else if (arrows[time].direction === "down") {
          newEl.className = arrows[time].elClass
          newEl.removeAttribute("style")
          newEl.style.top = "0px"
          newEl.style.right = "42px"
          newEl.style.position = "absolute"
          newEl.style.color = arrows[time].color
          newEl.style.textShadow = `0 0 10px ${arrows[time].color}, 0 0 20px ${arrows[time].color}, 0 0 30px ${arrows[time].color}, 0 0 40px ${arrows[time].color}, 0 0 70px ${arrows[time].color}, 0 0 80px ${arrows[time].color}, 0 0 100px ${arrows[time].color}, 0 0 150px ${arrows[time].color};`
        }
        document.querySelector(".arrows").innerHTML += newEl.outerHTML
      }
      time += 1
  }, 1000)
}



let rightArrow = document.getElementById("appended-right");
let leftArrow = document.getElementById("appended-left");
playbtn.addEventListener("click", () => {

})
let easy = 468.750001
let easyMargin = 0.04
let hard = 234.375005
let hardMargin = 0.08
// 0.04
let time = 0
let boolean = false
function hardCallback(timeStep) {
  let curr_time = performance.now()
  let diff = curr_time - startingTime
  let currBeat = diff / hard
  let decimals = currBeat % 1
  let margin = hardMargin
  if (decimals < 1-margin) {
    boolean = false
  }
  if (boolean === false && decimals > 1-margin) {
    console.log(time);
    boolean = true
    if(arrows[time] !== undefined) {
      newEl = document.createElement(arrows[time].element)
      if(arrows[time].direction === "left") {
        newEl.className = arrows[time].elClass
        newEl.removeAttribute("style")
        newEl.style.top = "0px"
        newEl.style.left = "0px"
        newEl.style.position = "absolute"
        newEl.style.color = arrows[time].color
        newEl.style.textShadow = `0 0 10px ${arrows[time].color}, 0 0 20px ${arrows[time].color}, 0 0 30px ${arrows[time].color}, 0 0 40px ${arrows[time].color}, 0 0 70px ${arrows[time].color}, 0 0 80px ${arrows[time].color}, 0 0 100px ${arrows[time].color}, 0 0 150px ${arrows[time].color};`

      } else if (arrows[time].direction === "right") {
        newEl.className = arrows[time].elClass
        newEl.removeAttribute("style")
        newEl.style.top = "0px"
        newEl.style.right = "0px"
        newEl.style.position = "absolute"
        newEl.style.color = arrows[time].color
        newEl.style.textShadow = `0 0 10px ${arrows[time].color}, 0 0 20px ${arrows[time].color}, 0 0 30px ${arrows[time].color}, 0 0 40px ${arrows[time].color}, 0 0 70px ${arrows[time].color}, 0 0 80px ${arrows[time].color}, 0 0 100px ${arrows[time].color}, 0 0 150px ${arrows[time].color};`
      } else if (arrows[time].direction === "up") {
        newEl.className = arrows[time].elClass
        newEl.removeAttribute("style")
        newEl.style.top = "0px"
        newEl.style.left = "42px"
        newEl.style.position = "absolute"
        newEl.style.color = arrows[time].color
        newEl.style.textShadow = `0 0 10px ${arrows[time].color}, 0 0 20px ${arrows[time].color}, 0 0 30px ${arrows[time].color}, 0 0 40px ${arrows[time].color}, 0 0 70px ${arrows[time].color}, 0 0 80px ${arrows[time].color}, 0 0 100px ${arrows[time].color}, 0 0 150px ${arrows[time].color};`
      } else if (arrows[time].direction === "down") {
        newEl.className = arrows[time].elClass
        newEl.removeAttribute("style")
        newEl.style.top = "0px"
        newEl.style.right = "42px"
        newEl.style.position = "absolute"
        newEl.style.color = arrows[time].color
        newEl.style.textShadow = `0 0 10px ${arrows[time].color}, 0 0 20px ${arrows[time].color}, 0 0 30px ${arrows[time].color}, 0 0 40px ${arrows[time].color}, 0 0 70px ${arrows[time].color}, 0 0 80px ${arrows[time].color}, 0 0 100px ${arrows[time].color}, 0 0 150px ${arrows[time].color};`
      }
      document.querySelector(".arrows").innerHTML += newEl.outerHTML
    }
    time += 1
  }
  requestAnimationFrame(hardCallback)
}



function easyCallback(timeStep) {
  let curr_time = performance.now()
  let diff = curr_time - startingTime
  let currBeat = diff / easy
  let decimals = currBeat % 1
  let margin = easyMargin
  if (decimals < 1-margin) {
    boolean = false
  }
  if (boolean === false && decimals > 1-margin) {
    console.log(time);
    boolean = true
    if(arrows[time] !== undefined) {
      newEl = document.createElement(arrows[time].element)
      if(arrows[time].direction === "left") {
        newEl.className = arrows[time].elClass
        newEl.removeAttribute("style")
        newEl.style.top = "0px"
        newEl.style.left = "0px"
        newEl.style.position = "absolute"
        newEl.style.color = arrows[time].color
        // newEl.style.textShadow = `0 0 10px ${arrows[time].color}, 0 0 20px ${arrows[time].color}, 0 0 30px ${arrows[time].color}, 0 0 40px ${arrows[time].color}, 0 0 70px ${arrows[time].color}, 0 0 80px ${arrows[time].color}, 0 0 100px ${arrows[time].color}, 0 0 150px ${arrows[time].color};`

      } else if (arrows[time].direction === "right") {
        newEl.className = arrows[time].elClass
        newEl.removeAttribute("style")
        newEl.style.top = "0px"
        newEl.style.right = "0px"
        newEl.style.position = "absolute"
        newEl.style.color = arrows[time].color
        // newEl.style.textShadow = `0 0 10px ${arrows[time].color}, 0 0 20px ${arrows[time].color}, 0 0 30px ${arrows[time].color}, 0 0 40px ${arrows[time].color}, 0 0 70px ${arrows[time].color}, 0 0 80px ${arrows[time].color}, 0 0 100px ${arrows[time].color}, 0 0 150px ${arrows[time].color};`
      } else if (arrows[time].direction === "up") {
        newEl.className = arrows[time].elClass
        newEl.removeAttribute("style")
        newEl.style.top = "0px"
        newEl.style.left = "42px"
        newEl.style.position = "absolute"
        newEl.style.color = arrows[time].color
        // newEl.style.textShadow = `0 0 10px ${arrows[time].color}, 0 0 20px ${arrows[time].color}, 0 0 30px ${arrows[time].color}, 0 0 40px ${arrows[time].color}, 0 0 70px ${arrows[time].color}, 0 0 80px ${arrows[time].color}, 0 0 100px ${arrows[time].color}, 0 0 150px ${arrows[time].color};`
      } else if (arrows[time].direction === "down") {
        newEl.className = arrows[time].elClass
        newEl.removeAttribute("style")
        newEl.style.top = "0px"
        newEl.style.right = "42px"
        newEl.style.position = "absolute"
        newEl.style.color = arrows[time].color
        // newEl.style.textShadow = `0 0 10px ${arrows[time].color}, 0 0 20px ${arrows[time].color}, 0 0 30px ${arrows[time].color}, 0 0 40px ${arrows[time].color}, 0 0 70px ${arrows[time].color}, 0 0 80px ${arrows[time].color}, 0 0 100px ${arrows[time].color}, 0 0 150px ${arrows[time].color};`
      }
      document.querySelector(".arrows").innerHTML += newEl.outerHTML
    }
    time += 1
  }
  requestAnimationFrame(easyCallback)
}
