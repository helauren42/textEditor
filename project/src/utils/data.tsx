export class Character {
	char: string
	bold: boolean
	italic: boolean
	underscore: boolean
	font: string
	font_size: number
	constructor(char: string, bold = false, italic = false, underscore = false, font = "system-ui", font_size = 12) {
		if (char.length != 1)
			console.error("Misuse of character class char length: ", char.length)
		this.char = char;
		this.bold = bold;
		this.italic = italic;
		this.underscore = underscore;
		this.font = font;
		this.font_size = font_size;
	}
}

export class Image {
	image: string
	font_size: number
	constructor(image: File, font_size: number = 24) {
		this.image = URL.createObjectURL(image)
		this.font_size = font_size * 2;
	}
}

