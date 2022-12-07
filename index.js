#!/usr/bin/env node
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import randomInteger from "random-int";
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function Welcome() {
    const RainbowTitle = chalkAnimation.rainbow("Welcome To The Number Guessing Game\n");
    await sleep();
    RainbowTitle.stop();
}
let score = 0;
let start = true;
async function GuessingNumber() {
    while (start) {
        let RandomNumber = randomInteger(1, 5);
        const data = await inquirer
            .prompt([
            {
                name: "Number1",
                type: "number",
                message: chalk.bgBlue("Guess a number between 1 to 5"),
            },
        ])
            .then((answers) => {
            if (answers.Number1 == RandomNumber) {
                console.log(chalk.bgGreen(`You have guessed a right number`));
                score += 10;
                console.log(chalk.bgGreen(`Your Score is ${score}`));
            }
            else {
                console.log(chalk.bgRed(`Try Again !`));
                start = false;
            }
        });
    }
}
await Welcome();
await GuessingNumber();
