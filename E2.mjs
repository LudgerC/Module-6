import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let naam;
let studentenlijst = [];


do
{
    naam = await userInput.question("Geef een naam: ");
    if(naam == "")
    {

    }
    else
    {
        studentenlijst.push(naam);
    }
    
}while(naam != "");

for(let i = 0; studentenlijst.length > i; i++)
{
    console.log(studentenlijst[i] + " is uitgenoding voor het leukste vak ");
}