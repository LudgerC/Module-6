import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


let prijzen = [1000, 100, 50, 10];
let resultaat = 0;

geefKorting(prijzen);

function geefKorting(prijzen)
{

    for(let i = 0; i < prijzen.length; i++)
    {
        let som = (prijzen[i] / 100) * 15;
        resultaat = prijzen[i] - som;
        console.log(resultaat);
    }

}
