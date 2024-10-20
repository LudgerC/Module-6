import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });



let scorearray = [];
let score = 0;
let som = 0;
let j = 0;

let aantalleerlingen = parseFloat(await userInput.question("Hoeveel scores wilt u invoeren? "));


for(let i = 0; aantalleerlingen > i; i++)
{
    j++;
    score = parseFloat(await userInput.question((i + 1)+ "." +" Geef de punten in: "));
    scorearray.push(score);
    som += score;   
}

console.log('\nDe gemiddelde is ' + (som / j));
