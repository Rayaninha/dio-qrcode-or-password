import chalk from "chalk"

const PromptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow.bold("Choose the tool [1]-QRCODE or [2]-PASSWORD"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Invalid number"),
        required: true
    }
]

export default PromptSchemaMain