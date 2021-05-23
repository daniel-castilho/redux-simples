import React from "react";

import Card from "./Card";

export default (props) => {
	return (
		<Card title="Sorteio de um Número" purple>
			<div>
				<span>
					<span>Resultado: </span>
					<strong>{props.sorteio}</strong>
				</span>
			</div>
		</Card>
	);
};
