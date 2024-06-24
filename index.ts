#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.italic.bgGreenBright("\n\t Welcome to Simple Currency Convertor\t\n")); 

let exchange_rate:any = {
    "Pkr": 277.70,
    "Usd": 1,
    "Eur": 0.9,
    "Jpy": 120,
    "Cad": 1.3,
    "Aud": 1.5,
}
let user_answer = await inquirer.prompt(
    [
        {
            name: "from_Currency",
            message:"Select a currency to exchange",
            type: "list",
            choices: ["Pkr", "Usd", "Eur", "Jpy", "Cad", "Aud"],
        },
        {
            name: "to_Currency",
            message: (chalk.bgYellowBright("Select a currency to convert into")),
            type: "list",
            choices: ["Pkr", "Usd", "Eur", "Jpy", "Cad", "Aud"],
        },
        {
            name: "amount",
            message: "Enter your amount to convert",
            type: "input",
        },
    ]
);

let from_amount = exchange_rate[user_answer.from_Currency];
let to_amount = exchange_rate[user_answer.to_Currency];
let amount = user_answer.amount

let base_amount = amount / from_amount;
let Converted_amount = base_amount *  amount

console.log(chalk.bgWhiteBright`Converter_amount = ${Converted_amount.toFixed(2)}`);