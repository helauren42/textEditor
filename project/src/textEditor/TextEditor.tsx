import type { Character, Image } from "../utils/data"
import { Editor } from "./editor/Editor"
import { Menu } from "./menu/Menu"
import "./textEditor.css"

export class Line {
	data: (Character | Image)[]
	indent: "left" | "center" | "justified" | "right"
	list: "numbers" | "points"
	constructor(data: (Character | Image)[] = [], indent: "left" | "center" | "justified" | "right", list: "numbers" | "points") {
		this.data = data;
		this.indent = indent;
		this.list = list;
	}
}

export const TextEditor = () => {
	return (
		<article id="text-editor">
			<Menu />
			<Editor />
		</article>
	)
}
