import inquirer from "inquirer";
import showBanner from "node-banner";
import gradient from "gradient-string";
(async () => {
    await showBanner("A T M", "ATM allows you to make transection effectivilly and efficientlly ", "red", "blue");
})();
async function fun() {
    const answer = await inquirer.prompt([
        // prompt user to get user ID
        {
            type: "input",
            name: "userId",
            message: gradient.rainbow("Kindly enter your Id:"),
        },
        // prompt user to get user PIN
        {
            type: "number",
            name: "userPin",
            message: gradient.rainbow("Kindly enter your Pin:"),
        },
        // prompt user to get user account type
        {
            type: "list",
            name: "accountType",
            choices: ["Current", "Saving"],
            message: gradient.rainbow("Kindly Select your Account Type:"),
        },
        // prompt user to get transaction type
        {
            type: "list",
            name: "transactionType",
            choices: ["Fast Cash", "Withdraw"],
            message: gradient.rainbow("Kindly Select your Transaction:"),
            // it run when accountType will run
            when(answer) {
                return answer.accountType;
            },
        },
        //prompt user to select their withdraw amout from "fast Cash" transection type
        {
            type: "list",
            name: "amount",
            choices: [1000, 2000, 5000, 10000, 15000, 20000],
            message: gradient.rainbow("Kindly Select your Withdraw amount:"),
            // it run when transactionType is "fast cash"
            when(answer) {
                return answer.transactionType === "Fast Cash";
            },
        },
        // prompt user to enter their withdraw amout from "withdraw" transection type
        {
            type: "number",
            name: "amount",
            message: gradient.rainbow("Kindly Enter your Withdraw amount:"),
            // it run when transactionType is "Withdraw"
            when(answer) {
                return answer.transactionType === "Withdraw";
            },
        },
    ]);
    if (answer.accountType && answer.transactionType) {
        const balance = Math.floor(Math.random() * 100000);
        console.log(gradient.rainbow(`Your balance is :${balance}`));
        const userWithdrewAmount = answer.amount;
        if (balance > userWithdrewAmount) {
            const remainingBalance = balance - userWithdrewAmount;
            console.log(gradient.rainbow(`Your withdraw amount is :${answer.amount}`));
            console.log(gradient.rainbow(`Your Remaining balance is :${remainingBalance}`));
        }
        else {
            console.log(gradient.rainbow("insuficient balannce"));
        }
    }
}
setTimeout(() => {
    fun();
}, 1000);
