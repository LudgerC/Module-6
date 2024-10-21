import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });



let naam = await userInput.question("Geef een naam: ");
let namen = ["Amin", "Sofie", "Samantha", "Karel", "Mehdi", "Joris", "Nuria"];


index(naam, namen);


function index(naam, namen)
{
    let i = 0;
    let found = false;
    do
    {
        if(naam == namen[i])
        {
            console.log("Het naam " + namen[i] + " is het " + i +"de naam van het lijst.");
        }
        
        i++;

    }while(i < namen.length);
}