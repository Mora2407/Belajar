import * as Belajar from "./mod.js"

async function CLI () {

	let Input = ""

	console.clear()
	while (true) {
		Input = await prompt("> ")

		
		if (Input === "" || Input === null) {
			continue
		}

		const Args = Input.split(/ +/g)
		const Command = Args.shift().trim()

		if (Command === "exit") {
			break
		} else if (Command === "belajar") {
			await Belajar.Belajar(Args)
		} else if (Command === "clear") {
			console.clear()
		} else {
			console.error("Command salah.")
			continue
		}
	}

}

await CLI()

const DATE = new Date()
console.log(`${DATE.getHours()}:${DATE.getMinutes()}:${DATE.getSeconds()}`)