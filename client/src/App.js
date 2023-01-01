import { useEffect } from 'react';
import Scene from './components/scene';


function App() {
	useEffect(() => {
		document.body.removeAttribute('style');
	}, [])

	return (
		<div>
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
				Learn React
			</a>
			<Scene />
		</div>
	);
}

export default App;
