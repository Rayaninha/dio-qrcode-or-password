import prompt from "prompt"
import PromptSchemaMain from "./prompts-schema/schema-main.js"
import createQRCode from "./services/qrCode/create.js"
import createPassword from "./services/password/create.js"
import chalk from "chalk"

(async function main() { })(
    prompt.get(PromptSchemaMain, async (err, choose) => {
        if (err) console.log(chalk.red.italic(err))

        if (choose.select == 1) {
            console.log("QRCODE")
            await createQRCode()
        }

        if (choose.select == 2) {
            console.log("PASSWORD")
            await createPassword()
        }

        prompt.start()
    })
)