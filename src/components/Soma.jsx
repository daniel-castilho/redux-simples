import React from "react";

import Card from "./Card";

export default (props) => {
	return (
		<Card title="Soma dos Números" blue>
			<div>
				<span>
					<span>Resultado: </span>
					<strong>{props.soma}</strong>
				</span>
			</div>
		</Card>
	);
};
