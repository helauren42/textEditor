import { Editor } from "./editor/Editor"
import { Menu } from "./menu/Menu"
import "./textEditor.css"

export const TextEditor = () => {
	return (
		<article id="text-editor">
			<Menu />
			<Editor />
		</article>
	)
}
