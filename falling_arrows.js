// __________________________________________________________
document.addEventListener("DOMContentLoaded", () => {
  playbtn.addEventListener("click", playPause);
  // initAudio(audio);
  document.onkeydown = checkKey;
  document.onkeyup = upKey;
})


let gotIt = ["620px", "621px", "622px", "623px", "624px", "625px", "626px", "627px", "628px", "629px", "630px", "631px", "632px", "633px", "634px", "635px", "636px", "637px", "638px",
"639px", "640px", "641px", "642px", "643px", "644px", "645px", "646px", "647px", "648px", "649px", "650px", "651px", "652px", "653px",
"654px", "655px", "656px", "657px", "658px", "659px", "660px", "661px", "662px", "663px", "664px", "665px", "666px", "667px", "668px", "669px", "670px"]
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
    document.querySelector(".how-to-play").remove();
    document.querySelector(".up-down-left-right-arrows").style.height = "700px"
    startingTime = performance.now()
    requestAnimationFrame(easyCallback)
    fallArrow();
  } else {
    audio.pause();
    playbtn.className = "fab fa-youtube fa-2x"
    // clearInterval(fallArrowInterval)
    // clearInterval(clockArrows)
  }
}


function initAudio(audio){
  audio.play()
}



// __________________________________________________________

let hardCounter = 15
let hardArrows = {}

  for (i=15; i<800; i++) {
    hardArrows[hardCounter] = [
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
    // if (i % [3, 16, 8, 32][Math.floor(Math.random() * 3) + 0] === 0) {
    //   counter += 2
    // } else {
    //   counter += 1
    // }
    hardCounter += 1
  }





let easyCounter = 7
let easyArrows = {}

for (i=7; i<385; i++) {


  easyArrows[easyCounter] = [
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
    easyCounter += 2
  } else {
    easyCounter += 1
  }
}




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
    // console.log(time);
    boolean = true
    if(hardArrows[time] !== undefined) {
      newEl = document.createElement(hardArrows[time].element)
      if(hardArrows[time].direction === "left") {
        newEl.className = hardArrows[time].elClass
        newEl.removeAttribute("style")
        newEl.style.top = "0px"
        newEl.style.left = "0px"
        newEl.style.position = "absolute"
        newEl.style.color = hardArrows[time].color
      } else if (hardArrows[time].direction === "right") {
        newEl.className = hardArrows[time].elClass
        newEl.removeAttribute("style")
        newEl.style.top = "0px"
        newEl.style.right = "0px"
        newEl.style.position = "absolute"
        newEl.style.color = hardArrows[time].color
      } else if (hardArrows[time].direction === "up") {
        newEl.className = hardArrows[time].elClass
        newEl.removeAttribute("style")
        newEl.style.top = "0px"
        newEl.style.left = "42px"
        newEl.style.position = "absolute"
        newEl.style.color = hardArrows[time].color
      } else if (hardArrows[time].direction === "down") {
        newEl.className = hardArrows[time].elClass
        newEl.removeAttribute("style")
        newEl.style.top = "0px"
        newEl.style.right = "42px"
        newEl.style.position = "absolute"
        newEl.style.color = hardArrows[time].color
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
    // console.log(time);
    boolean = true
    if(easyArrows[time] !== undefined) {
      newEl = document.createElement(easyArrows[time].element)
      if(easyArrows[time].direction === "left") {
        newEl.className = easyArrows[time].elClass
        newEl.removeAttribute("style")
        newEl.style.top = "0px"
        newEl.style.left = "0px"
        newEl.style.position = "absolute"
        newEl.style.color = easyArrows[time].color
      } else if (easyArrows[time].direction === "right") {
        newEl.className = easyArrows[time].elClass
        newEl.removeAttribute("style")
        newEl.style.top = "0px"
        newEl.style.right = "0px"
        newEl.style.position = "absolute"
        newEl.style.color = easyArrows[time].color
      } else if (easyArrows[time].direction === "up") {
        newEl.className = easyArrows[time].elClass
        newEl.removeAttribute("style")
        newEl.style.top = "0px"
        newEl.style.left = "42px"
        newEl.style.position = "absolute"
        newEl.style.color = easyArrows[time].color
      } else if (easyArrows[time].direction === "down") {
        newEl.className = easyArrows[time].elClass
        newEl.removeAttribute("style")
        newEl.style.top = "0px"
        newEl.style.right = "42px"
        newEl.style.position = "absolute"
        newEl.style.color = easyArrows[time].color
      }
      document.querySelector(".arrows").innerHTML += newEl.outerHTML
    }
    time += 1
  }
  requestAnimationFrame(easyCallback)
}

document.getElementById("normal").addEventListener("click", ()  => {
  document.querySelector(".how-to-play").remove();
  document.querySelector(".up-down-left-right-arrows").style.height = "700px"
  audio.play();
  playbtn.className = "far fa-pause-circle fa-2x"
  // clock(arrows);
  // animations()
  // run(arrows)
  startingTime = performance.now()
  requestAnimationFrame(easyCallback)
  fallArrow();
})

document.getElementById("expert").addEventListener("click", ()  => {
  document.querySelector(".how-to-play").remove();
  document.querySelector(".up-down-left-right-arrows").style.height = "700px"
  audio.play();
  playbtn.className = "far fa-pause-circle fa-2x"
  // clock(arrows);
  // animations()
  // run(arrows)
  startingTime = performance.now()
  requestAnimationFrame(hardCallback)
  fallArrow();
})
