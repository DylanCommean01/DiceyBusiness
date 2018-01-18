const MIN = 1;
const MAX = 6;
let dieArray = [];
let dieContainer = document.getElementById('die-container');
let createDieBtn = document.getElementById('generate-die');
let rollBtn = document.getElementById('roll-die');

createDieBtn.addEventListener('click', createDie);
rollBtn.addEventListener('click', rollDie);

class Die {
    constructor(value) {
        this.div = document.createElement('div');
        this.div.style.display = 'inline-block';
        dieContainer.append(this.div);
        this.roll();
        dieArray.push(this);
    }

    roll() {
        this.value = randomVal(MIN, MAX);
        this.div.innerHTML = `&#${(9855 + this.value)}`;
    }
}

function createDie() {
    let RandomValues = randomVal(MIN, MAX);
    let createDie = new Die(RandomValues);
}

function rollDie() {
    for(let i = 0; i < dieArray.length; i++) {
        dieArray[i].roll();
    }
}

function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}