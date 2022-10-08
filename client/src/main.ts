import './style.css'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
	<div>
		<h1>Overlay</h1>
		<div class="card">
			<button id="counter" type="button"></button>
		</div>
	</div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
