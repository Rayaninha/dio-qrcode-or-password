const mainPrompt = [
    {
        name: "select",
        description: "Choose the tool [1]-QRCODE or [2]-PASSWORD",
        pattern: /^[1-2]+$/,
        message: "Invalid number",
        required: true
    }
]

export default mainPrompt