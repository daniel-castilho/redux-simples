import React, { useState } from 'react';
import "./App.css";

import Intervalo from "./components/Intervalo";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";

function App() {
	const [min, setMin] = useState(1);
	const [max, setMax] = useState(10);


	return (
		<div className="App">
			<h1>Execício React-Redux (Simples)</h1>
			<div className="linha">
				<Intervalo min={min} max={max} onMinChanged={setMin} onMaxChanged={setMax}/>
			</div>
			<div className="linha">
				<Media min={min} max={max} green>
					x
				</Media>
				<Soma min={min} max={max} blue>
					y
				</Soma>
				<Sorteio min={min} max={max} purple>
					y
				</Sorteio>
			</div>
		</div>
	);
}

export default App;
