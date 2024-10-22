import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


let getallen = [1, 5, 2, 3, 6, 4, 9, 7, 8, 0];

let resultaat = getallen.sort()

console.log(resultaat)
