import { Parser } from "./parser.js"

/*
belajar <command> <args...>

Command:
1. baca <filename>
2. new <filename>
3. quiz <filename> <random (y/n*)
*/

export async function Belajar (args) {
	const Command = args?.shift()?.toLowerCase()
	if (args.length === 0) return
	try {
		Deno.readTextFileSync(`./Belajar/${args[0]}.txt`)
	} catch (err) {
		console.error("File tidak ada.")
		return;
	}
	if (Command === "baca") {
		const Text = Deno.readTextFileSync(`./Belajar/${args[0]}.txt`)
		const belajar = Parser(Text)
		console.log(`Pelajaran: ${belajar.Pelajaran}\n\nJudul: ${belajar.Judul}`)
		for (let i = 0; i < belajar.Materi.length; i++) {
			const materi = belajar.Materi[i]
			if (Array.isArray(materi.Isi)) materi.Isi = materi.Isi.join(", ")
			console.log(`${materi.Judul}: ${materi.Isi}`)
		}
	} else if (Command === "test") {
		const Text = Deno.readTextFileSync(`./Belajar/${args[0]}.txt`)
		const belajar = Parser(Text)
		console.log(`Pelajaran: ${belajar.Pelajaran}\n\nJudul: ${belajar.Judul}`)
		for (const materi of belajar.Materi) {
			const Jawaban = await prompt(`\n${materi.Judul}:`)
			if (Array.isArray(materi.Isi)) materi.Isi = materi.Isi.join(", ")
			console.log(`%c${materi.Isi}`, "color: green")
		}
		await prompt("")
		console.clear()
	}
}