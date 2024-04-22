#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let condition = true

while (condition) {

    const answer: {

        Paragraph: string            // Declaring the types for object below

    } = await inquirer.prompt([
        {
            name: "Paragraph",
            type: "input",
            message: chalk.yellowBright("Please enter your paragraph to count the words and the characters:")

        }
    ]);


    // Storing the input data inside another variable by removing the white space and line terminator characters

    const words = answer.Paragraph.trim();

    console.log(`The number of characters in your paragraph are: ${chalk.blueBright(words.length)}`);

    // Now counting the words instead of single character, by splitting the characters into words

    const wordsSplit = words.split(" ");

    console.log(`The number of words in your paragraph are: ${chalk.greenBright(wordsSplit.length)}`);


    // taking input, whether to restart or not

    const startAgain = await inquirer.prompt([
        {
            name: "restart",
            default: "true",
            type: "confirm",
            messsage: "Do you wish to restart?"
        }
    ]);

    condition = startAgain.restart;

};