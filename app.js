let time = 3
let score = 0
let isPlaying

window.addEventListener("load", init) 


const wordInput = document.querySelector("#word-input")
const currentWord = document.querySelector("#current-word")
const scoreDisplay = document.querySelector("#score")
const timeDisplay = document.querySelector("#time")
const message = document.querySelector("#message")
const seconds = document.querySelector("#seconds")


const words = [
    "cousin",
    "Dermatoglyphics",
    "Walloonphobia",
    "Uniformitarianism",
    "Laryngotracheotomy",
    "Zoosporangium",
    "Depression",
    "Axiom",
    "Utility",
    "Biomass",
    "Call of Duty",
    "November",
    "Javascript",
    "Python",
    "Ruby On Rails",
    "Grim",
    "Carrot",
    "Strawberry",
    "flavorful",
    "cocktail",
    "revolver",
    "siblings",
    "developer",
    "echo",
    "sunshine",
    "midnight",
    "love",
    "joke",
    "stubborn",
    "master",
    "I Love you Marie",
    "definition",
    "Spider-Man",
    "Superman",
    "Batman",
    "Light",
    "Kira",
    "Video Game",
    "Equestrian",
    "Democrat",
    "Republican",
    "Red Dead Redemption",
    "Investigate",
    "Laughter",
    "Showers",
    "Horse",
    "Gyro",
    "Squeeze",
    "you are amazing",
    "I believe in you"
    
]

function init() {
  showWord(words)

  wordInput.addEventListener("input", startMatch)

  setInterval(countdown, 1000)

  setInterval(checkStatus, 50)


}


function startMatch() {
    if(matchWords()) {
         isPlaying = true
         time = 4
         showWord(words)
         wordInput.value = ""
         score++
    }
 if(score === -1) {
   scoreDisplay.innerHTML = 0
 } else{
    scoreDisplay.innerHTML = score
 }
}


function matchWords(){
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = "Correct!"
        return true
        } else {
           message.innerHTML = ""
            return false
        }
}


function showWord(words) {
    const randIndex = Math.floor(Math.random() * words.length)

    currentWord.innerHTML = words[randIndex]
}


function countdown() {
    //make sure time is not run out


    if(time > 0) {
        time--

    } else if(time === 0) {
       // Game is over

       isPlaying = false
    }

    timeDisplay.innerHTML = time
}


//check game status

function checkStatus(){
    if(!isPlaying && time == 0) {
        message.innerHTML = "Game Over!"
        score = -1
    }
}