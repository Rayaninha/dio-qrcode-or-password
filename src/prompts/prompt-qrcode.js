import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow("Insert the link to generate the QRCODE")
    },
    {
        name: "type",
        description: chalk.yellow("Choose between types [1]-IMAGE or [2]-TERMINAL"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Invalid number")
    }
];

export default promptQRCode;