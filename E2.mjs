import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let naam;
let studentenlijst = ['Ludger', 'Kim', 'Damian'];


for(let i = 0; studentenlijst.length > i; i++)
{
    console.log(studentenlijst[i] + " is uitgenoding voor het leukste vak ");
}