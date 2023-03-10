const main = document.querySelector('.main');
const game = {
    score: 0,
    streak: 0
    // streak tracks how many we have got rught in a row
}
// once the application openst up we want to have a button to run the game for user
const btn = document.createElement('button');
const btn1 = document.createElement('button');

const output = document.createElement('div');
const scoring = document.createElement('div');
const message = document.createElement('div');
message.textContent = "Press Button to Start Game"
main.append(message)
main.append(scoring)
main.append(output)
main.append(btn);
main.append(btn1);

const coin = document.createElement('div');
const sideA = document.createElement('div');
const sideB = document.createElement('div');
output.append(coin)
coin.append(sideA);
coin.append(sideB)
sideA.innerHTML = "&#9786";
sideB.innerHTML = "&#9785"



coin.classList.add('coin')
coin.style.display = 'none'
btn.textContent = "Start Game"
btn.addEventListener('click', playGame)
btn.classList.add('btn');
btn1.classList.add('btn')

scoring.classList.add('score')
message.classList.add('message')

btn1.style.display = "none"
btn1.addEventListener('click', playGame)


btn.style.backgroundColor = "red";
btn1.style.backgroundColor = "blue"

function playGame(e) {

    // console.log(e.target.textContent)
    const el = e.target
    if (el.textContent === 'Start Game') {
        game.score = 0;
        game.streak = 0;
        btn.textContent = "Heads";
        btn1.style.display = "block"
        btn1.textContent = "Tails";
        coin.style.display = "block"
        message.textContent = "Select Either Heads Or Tails"
        addScore();
    } else if (el.textContent === "Heads") {
        cointFlipper("Heads");
    } else if (el.textContent === 'Tails') {
        cointFlipper("Tails");
    }

    // btn.style.display = 'none'
}



function cointFlipper(val) {
    const ranVal = Math.floor(Math.random() * 2)
    let result = "";
    if (ranVal === 1) {
        sideA.style.display = "block";
        sideB.style.display = "none";
        console.log(ranVal)

        result = "Heads"
    } else {
        sideA.style.display = "none";
        sideB.style.display = "block";
        console.log(ranVal)
        result = "Tails"
    }

    if (result === val) {
        let myAudio = new Audio('https://notification-sounds.com/soundsfiles/Quiz-correct-sound-with-applause.mp3')
        myAudio.play();
        game.score++;
        game.streak++;
        message.textContent = `Congradulation!!!! you picked ${val} ,Correct it was ${result}`

    } else {
        game.streak = 0;
        game.score--;
        message.textContent = `Wrong!!! you picked ${val} !!! it was ${result}`
    }
    addScore();
    return result
}




function addScore() {
    scoring.innerHTML = `Score : ${game.score} Streak(${game.streak})`
}