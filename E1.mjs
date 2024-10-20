import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let naam;
let studentenlijst = [];


do
{
    naam = await userInput.question("Geef een naam: ");
    if(naam == "S")
    {

    }
    else
    {
        studentenlijst.push(naam);
    }
    
}while(naam != "S");

console.log(studentenlijst)


