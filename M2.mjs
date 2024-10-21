import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });


let fibonacci = [0, 1];
let j = 0;
let y = 0;


for(let i = 0; i < 9; i++)
{
    if(i == 0)
    {
        
    }
    else
    {
        y = (j - 1);

        let som = (fibonacci[y] + fibonacci[j]);

        fibonacci.push(som);

    }

    j++;
    
}
console.log(fibonacci); 