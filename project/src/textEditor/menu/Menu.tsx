import { useEffect, useState } from "react"
import "./menu.css"

import { fontSizes } from "../../utils/const.tsx"

const MenuSelect = ({ value, options, setter }: { value: number, options: number[], setter: React.Dispatch<React.SetStateAction<number>> }) => {
	const handleChange = (eventVal: string) => {
		setter(parseInt(eventVal))
	}
	return (
		<select value={value} onChange={(e) => handleChange(e.target.value)}>
			{
				options.map((v: number) => (
					<option key={v} value={v}>{v}</option>
				))
			}
		</select >
	)
}

export const Menu = () => {
	const [fontSize, setFontSize] = useState<number>(12)
	useEffect(() => {
		console.log(fontSize)
	}, [fontSize])
	return (
		<div id="menu">
			<div className="menu-group">
				<img src="/images/undo.svg" alt="undo" title="undo" />
				<img src="/images/redo.svg" alt="redo" title="redo" />
			</div>
			<div className="menu-group">
				<img src="/images/bold.svg" alt="bold" title="bold" />
				<img src="/images/italic.svg" alt="italic" title="italic" />
				<img src="/images/underline.svg" alt="underline" title="underline" />
			</div>
			<div className="menu-group">
				{/* <img src="/images/text.svg" alt="previous" title="previous" /> */}
				<img src="/images/text.svg" alt="select-font" title="select-font" />
				{/* todo make selectable fonts */}
				{/* <MenuSelect value={fontSize} options={fontSizes} setter={setFontSize} /> */}
				{/* <img src="/images/font-size.svg" alt="font-size" title="font-size" /> */}
				<MenuSelect value={fontSize} options={fontSizes} setter={setFontSize} />
				<img src="/images/minus.svg" alt="minus" title="minus" onClick={() => {
					const index = fontSizes.indexOf(fontSize);
					if (index <= 0)
						return
					setFontSize(fontSizes[index - 1])
				}} />
				<img src="/images/plus.svg" alt="plus" title="plus" onClick={() => {
					const index = fontSizes.indexOf(fontSize);
					if (index >= fontSizes.length - 1)
						return
					setFontSize(fontSizes[index + 1])
				}} />
			</div>
			<div className="menu-group">
				<img src="/images/align-left.svg" alt="text-align-left" title="text-align-left" />
				<img src="/images/align-center.svg" alt="text-align-center" title="text-align-center" />
				<img src="/images/align-justify.svg" alt="text-align-justified" title="text-align-justified" />
				<img src="/images/align-right.svg" alt="text-align-right" title="text-align-right" />
			</div>
			<div className="menu-group">
				<img src="/images/list-numbers.svg" alt="list-numbers" title="list-numbers" />
				<img src="/images/list-points.svg" alt="list-points" title="list-points" />
			</div>
			<div className="menu-group">
				<img src="/images/link.svg" alt="link" title="link" />
				<img src="/images/picture.svg" alt="picture" title="picture" />
			</div>
		</div>
	)
}
