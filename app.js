const main = document.querySelector('.main');
const game = {
    score: 0,
    streak: 0
    // streak tracks how many we have got rught in a row
}
// once the application openst up we want to have a button to run the game for user
const btn = document.createElement('button');
const output = document.createElement('div');
const scoring = document.createElement('div');

main.append(scoring)
main.append(output)
main.append(btn);

const coin = document.createElement('div');
const sideA = document.createElement('div');
const sideB = document.createElement('div');
output.append(coin)
coin.append(sideA);
coin.append(sideB)
sideA.innerHTML = "&#9786";
sideB.innerHTML="&#9785"

coin.classList.add('coin')
btn.textContent = "Start Game"
btn.addEventListener('click', playGame)


function playGame(e) {

    console.log(e.target.textContent)
    const el = e.target
    if (el.textContent === 'Start Game') {
        game.score = 0;
        game.streak = 0;
        btn.textContent = "Flip Coin";
    } else if (el.textContent === "Flip Coin") {
        console.log('Flip Coin')
    }

    // btn.style.display = 'none'
}




function addScore() {
    scoring.innerHTML = `Score : ${game.score} Streak(${game.streak})`
}