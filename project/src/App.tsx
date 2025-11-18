import './App.css'
import { TextEditor } from './textEditor/TextEditor'
// import { MDXEditor, headingsPlugin } from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';

// function App() {
// 	return <MDXEditor markdown={'# Hello World'} plugins={[headingsPlugin()]} />;
// }

function App() {
	return (
		<div id="page" className='w-full h-full bg-red-950 z-50 flex items-center justify-around'>
			<div id="application-container" className='w-[1200px] h-[800px]'>
				<TextEditor />
			</div>
		</div>
	)
}



export default App
