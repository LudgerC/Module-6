import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let xpositie = parseFloat(await userInput.question("Geef me een X positie voor de boot: "));
let ypositie = parseFloat(await userInput.question("Geef me een Y positie voor de boot: "));

let lengte = parseFloat(await userInput.question("Geef het lengte van de boot: "));
let directie = parseFloat(await userInput.question("Geef het directie van het boot:(left, right, up, down): "));


let veld = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

boot(xpositie, ypositie, lengte, directie);

let x = parseFloat(await userInput.question("Geef x in positie om te schieten: "));
let y = parseFloat(await userInput.question("Geef y in positie om te schieten: "));
shoot(x, y);



function shoot(x, y)
{
  veld[x][y] = "*";
  console.log("U heeft geschoten op x positie " + x + " en op y " + y);
  console.log(veld);
}

function boot(xpositie, ypositie, lengte, directie)
{
  if (lengte <= 5 && lengte >= 2) {
    switch (directie) {
      case "left":
        for (let i = 0; i < lengte; i++) {
            if (ypositie - i < 0 || ypositie - i > 9) {
                return console.log("You are out of the playfield")
            }
            veld[xpositie][ypositie - i] = "B";
        }
        break;

      case "right":
        for (let a = 0; i < lengte; i++) {
            if (ypositie + i < 0 || ypositie + i > 9) {
                return console.log("You are out of the playfield")
            }
            veld[xpositie][ypositie + i] = "B";
        }
        break;

      case "up":
        for (let i = 0; i < lengte; i++) {
            if (xpositie - i < 0 || xpositie - i > 9) {
                return console.log("You are out of the playfield")
            }
            veld[xpositie - i][ypositie] = "B";
        }
        break;

      case "down":
        for (let i = 0; i < lengte; i++) {
            if (xpositie + i < 0 || xpositie + i > 9) {
                return console.log("You are out of the playfield")
            }
            veld[xpositie + i][ypositie] = "B";
        }
        break;

      default:
        console.log("Ongeldig");
    }
    console.log(veld);
  } else {
    console.log("Lengte van de boot moet tussen 2 en 5 zijn! ");
  }
}