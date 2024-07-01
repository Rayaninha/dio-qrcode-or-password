import prompt from "prompt"
import mainPrompt from "./prompts/prompt-main.js"
import createQRCode from "./services/qrCode/create.js"

(async function main() { })(
    prompt.get(mainPrompt, async (err, choose) => {
        if (choose.select == 1) {
            console.log("QRCODE")
            await createQRCode()
        }

        if (choose.select == 2) {
            console.log("PASSWORD")
        }

        prompt.start()
    })
)