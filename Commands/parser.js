class Materi {
	constructor (judul, isi) {
		this.Judul = judul
		this.Isi = isi
	}
}

export function Parser (text) {
	const Belajar = {
		Pelajaran: "",
		Judul: "",
		Materi: []
	}

	let Text = text.split("\r\n").filter(x => x !== "")
	
	let Index = 0

	while (Index < Text.length) {
		let Line = Text[Index]
		
		if (Line[0] === "#") {
			if (Line[1] === "#") {
				Belajar.Judul = Line.substring(2).trim()
				
				Index++
				continue
			}
			Belajar.Pelajaran = Line.substring(1).trim()

			Index++
			continue
		} else if (Line[0].trim() !== "") {
			let materi = new Materi()
			if (Line.includes(":")) {
				let [judul, isi] = Line.split(":")
				isi = isi.trim()
				if (isi.includes(",")) isi = isi.split(",").map(x => x.trim())
				materi.Judul = judul
				materi.Isi = isi
			}
			Belajar.Materi.push(materi)
		}

		Index++
	}

	return Belajar
}